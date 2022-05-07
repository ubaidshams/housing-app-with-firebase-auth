import React, { useContext } from "react";
import { GlobalContext } from "../../apis/GlobalContext";
import HeaderMenu from "./HeaderMenu";

const Sidebar = () => {
  let { sidebar } = useContext(GlobalContext);
  return (
    <div>
      {sidebar === true ? (
        <section className="sidebar" onClick={e => e.stopPropagation()}>
          <HeaderMenu />
        </section>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sidebar;
