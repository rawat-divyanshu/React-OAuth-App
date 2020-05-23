import React from "react";
import GitHubLogin from "react-github-login";
import "./bootstrap-social.css";

const GithubLoginButton = (props) => {
  const reponseGithub = (response) => {
    console.log(response.code);
    const opts = {
      client_id: "Iv1.fad3e88892e052d9",
      client_secret: "eca6de06e23c2ef385ffcad5e0998233614b88fa",
      code: response.code,
      redirectUri: "http://localhost:3000",
      state: "xdrandom",
    };

    try {
      var coderesponse = fetch("https://github.com/login/oauth/access_token", {
        method: "post",
        body: JSON.stringify(opts),
        mode: "no-cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
        },
      }).then(function (response) {
        return response;
      });
    } catch (err) {
      console.log("eeror");
    }
  };
  return (
    <React.Fragment>
      <GitHubLogin
        clientId="Iv1.fad3e88892e052d9"
        redirectUri="http://localhost:3000"
        scope="user"
        state="xdrandom"
        onSuccess={reponseGithub}
        onFailure={reponseGithub}
        buttonText="Login with Github"
        className="btn-github"
        icon="fab fa-github"
      />
      {document.getElementById("example")}
    </React.Fragment>
  );
};

export default GithubLoginButton;
