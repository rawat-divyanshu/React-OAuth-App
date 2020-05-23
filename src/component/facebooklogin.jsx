import React from "react";
import FacebookLogin from "react-facebook-login";

const FacebookLoginButton = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <React.Fragment>
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        scope="public_profile,user_friends,user_actions.books"
        callback={responseFacebook}
      />
      {document.getElementById("demo")}
    </React.Fragment>
  );
};

export default FacebookLoginButton;
