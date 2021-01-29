import React from "react";
import { useGoogleAuth } from "./googleAuth";

const LoginButton = () => {
  const { signIn } = useGoogleAuth();

  return <button onClick={signIn}>Login</button>;
};

export default LoginButton;
