const AppId = "572555493231652";
const SDKVersion = "v3.2";

export default {
  init() {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: AppId,
        xfbml: true,
        version: SDKVersion
      });
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  },

  login() {
    FB.getLoginStatus(res => {
      console.log(res);
    });
  }
};
