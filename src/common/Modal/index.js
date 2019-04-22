import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { FullShadow, SignupArea, InputArea, ErrorArea } from "./styles";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
  el = document.createElement("div");

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentDidUpdate() {
    const { signup, onToggleModal } = this.props;
    signup && signup.get("isSuccess") ? onToggleModal() : "";
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  isControlled(prop) {
    return this.props[prop] !== undefined;
  }

  render() {
    const { onToggleModal, children, signup } = this.props;
    let errorMsg = "";

    if (!signup.get("isSuccess")) {
      errorMsg = signup.getIn(["error", "message"]);
    }

    return ReactDOM.createPortal(
      <Fragment>
        <FullShadow
          onClick={this.isControlled("showModal") ? onToggleModal : ""}
        />
        <SignupArea>
          <InputArea>
            {children}
            <ErrorArea>
              <span>{errorMsg}</span>
            </ErrorArea>
          </InputArea>
        </SignupArea>
      </Fragment>,
      modalRoot
    );
  }
}

const mapStateToProps = ({ signup }) => ({
  signup
});

export default connect(
  mapStateToProps,
  null
)(Modal);
