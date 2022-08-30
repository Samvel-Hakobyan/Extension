import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FiLogOut } from "react-icons/fi";

const LoginButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && <FiLogOut className="logout" onClick={() => logout()} />
  );
};

export default LoginButton;
