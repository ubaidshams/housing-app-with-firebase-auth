import ReactDOM from "react-dom";

import React, { useContext } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { GlobalContext } from "../apis/GlobalContext";

const SidebarModal = () => {
  let { setSidebar } = useContext(GlobalContext);
  return ReactDOM.createPortal(
    <div
      className="sidebarModal"
      onClick={() => {
        setSidebar(false);
      }}
    >
      <Sidebar />
    </div>,
    document.getElementById("sidebar")
  );
};

export default SidebarModal;
