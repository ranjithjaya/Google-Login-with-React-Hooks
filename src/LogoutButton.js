import React from "react";
import { useGoogleAuth } from "./googleAuth";

const LogoutButton = () => {
  const { signOut } = useGoogleAuth();

  return <button onClick={signOut}>Logout</button>;
};

export default LogoutButton;
