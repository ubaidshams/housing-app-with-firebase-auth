import ReactDOM from "react-dom";

import React, { Children, useContext } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { GlobalContext } from "../apis/GlobalContext";
import Login from "../auth/Login";

const AuthModal = () => {
  return ReactDOM.createPortal(
    <div className="authModal">
      <Login />
    </div>,
    document.getElementById("modal")
  );
};

export default AuthModal;
