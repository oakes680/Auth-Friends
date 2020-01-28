import React from "react";
import LoginForm from "./LoginForm";



const Login = (props) => {

  console.log('xxxxx', props)
  return (
    <div>
      <h1>Login Here</h1>
      <LoginForm props={props}/>
    </div>
  );
};

export default Login;