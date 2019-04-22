import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form/immutable";
import { withRouter } from "react-router-dom";
import { Map } from "immutable";

import Modal from "../../common/Modal";
import actions from "../../actions";
import FacebookSDK from "../../utils/FacebookSDK";
import {
  Container,
  LoginCard,
  InputSection,
  InputArea,
  InputField,
  CenterArea,
  LoginLabel,
  ButtonArea,
  CustomButtom,
  SigunupButton,
  SocialArea,
  CustomInputField,
  CustomModalLabel,
  ModalInputArea,
  ModalButtonArea,
  ErrorArea
} from "./styles";

import elements from "../../styles/elements";

class Login extends PureComponent {
  state = {
    showModal: false,
    userInfo: Map({
      email: "",
      password: "",
      name: ""
    })
  };

  componentDidMount() {
    FacebookSDK.init();
  }

  componentDidUpdate() {
    const { signin } = this.props;
    
    if (signin.get("isSuccess")) {
      this.props.history.push('/');
    } 
  }

  onFacebooksignup = () => {
    FacebookSDK.login();
  };

  onSubmit = values => {
    const { reset, userSignin } = this.props;
    if (userSignin && userSignin !== "undefined") {
      userSignin(values);
    }
    reset();
  };

  onSignup = () => {
    const { userInfo } = this.state;
    const { userSignup } = this.props;

    if (userSignup && typeof userSignup === "function") {
      userSignup(userInfo);
    }
  };

  onSetUserInfo = (type, value) => {
    const { userInfo } = this.state;
    const newData = userInfo.set(type, value);
    this.setState({
      userInfo: newData
    });
  };

  onToggleModal = () => {
    const { showModal } = this.state;
    this.setState({
      showModal: !showModal
    });
  };

  onRenderModalField = field => {
    const { type, label, placeholder, input } = field;

    return (
      <ModalInputArea>
        <CustomModalLabel>{label}:</CustomModalLabel>
        <CustomInputField
          {...input}
          type={type}
          placeholder={placeholder}
          autoComplete="off"
        />
      </ModalInputArea>
    );
  };

  onRenderField = field => {
    const {
      type,
      label,
      placeholder,
      input,
      meta: { touched, error }
    } = field;

    return (
      <div>
        <CenterArea>
          <InputField
            key={label}
            {...input}
            type={type}
            placeholder={placeholder}
            autoComplete="off"
          />
          <LoginLabel>{label}</LoginLabel>
          <ErrorArea>{touched && <span>{error}</span>}</ErrorArea>
        </CenterArea>
      </div>
    );
  };

  render() {
    const { handleSubmit, submitting } = this.props;
    const { showModal } = this.state;

    return (
      <Fragment>
        <Container>
          <LoginCard>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <InputSection>
                <InputArea>
                  <Field
                    label="Email"
                    type="text"
                    name="email"
                    placeholder="Please enter your email"
                    component={this.onRenderField}
                  />
                  <Field
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Please enter your password"
                    component={this.onRenderField}
                  />
                </InputArea>
              </InputSection>
              <ButtonArea>
                <CustomButtom>取消</CustomButtom>
                <CustomButtom 
                  type="submit" 
                  show
                  disabled={submitting}
                >
                  送出
                </CustomButtom>
              </ButtonArea>
              <SigunupButton onClick={this.onToggleModal}>
                <span />
                <span />
              </SigunupButton>
              <SocialArea>
                <span onClick={this.onFacebooksignup}>
                  <i className="fab fa-facebook-square" />
                </span>
                <span>
                  <i className="fab fa-google" />
                </span>
              </SocialArea>
            </form>
          </LoginCard>
        </Container>
        {showModal ? (
          <Modal onToggleModal={this.onToggleModal} showModal={showModal}>
            <Field
              label="Name"
              name="name"
              type="text"
              placeholder="Please enter your name"
              component={this.onRenderModalField}
              onChange={e => this.onSetUserInfo("name", e.target.value)}
            />
            <Field
              label="Email"
              name="signupEmail"
              type="text"
              placeholder="Please enter your email"
              component={this.onRenderModalField}
              onChange={e => this.onSetUserInfo("email", e.target.value)}
            />
            <Field
              label="Password"
              name="signupPassword"
              type="password"
              placeholder="Please enter your password"
              component={this.onRenderModalField}
              onChange={e => this.onSetUserInfo("password", e.target.value)}
            />
            <ModalButtonArea>
              <elements.CommonButton
                color="#48dbfb"
                margin="1rem"
                opacity=".3"
                onClick={this.onSignup}
              >
                送出
              </elements.CommonButton>
            </ModalButtonArea>
          </Modal>
        ) : null}
      </Fragment>
    );
  }
}

const validate = values => {
  const errors = {};
  const emailRegexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const passwordRegexp = /[A-Za-z0-9]/;
  const formData = {
    email: values.get("email"),
    password: values.get("password")
  };

  if (!formData.email) {
    errors.email = "Please enter your email";
  } else if (!emailRegexp.test(formData.email)) {
    errors.email = "Invalid email format";
  }

  if (!formData.password) {
    errors.password = "Please enter your password";
  } else if (!passwordRegexp.test(formData.passwoed)) {
    errors.password = "Invalid password format";
  }

  return errors;
};

const mapStateToProps = ({ signup, signin }) => ({
  signup,
  signin
});

export default withRouter(
  connect(
    mapStateToProps,
    { ...actions }
  )(
    reduxForm({
      form: "login",
      validate
    })(Login)
  )
);
