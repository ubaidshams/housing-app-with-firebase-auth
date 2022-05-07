import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalProvider from "./apis/GlobalContext";
import Navbar from "./components/navbar/Navbar";
import AuthModal from "./helper/AuthModal";
import SidebarModal from "./helper/SidebarModal";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <SidebarModal />
        <AuthModal />
      </Router>
    </GlobalProvider>
  );
};

export default App;
