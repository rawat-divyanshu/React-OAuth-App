import React from "react";
import GoogleLogin from "react-google-login";

const GoogleLoginButton = (props) => {
  const responseGoogle = (response) => {
    props.googleLoginResponse(response);
  };

  return (
    <React.Fragment>
      <GoogleLogin
        clientId="520256764532-an5f7b2aqa4831ees7ftnm180qjnh8ku.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      {document.getElementById("googleButton")}
    </React.Fragment>
  );
};

export default GoogleLoginButton;
