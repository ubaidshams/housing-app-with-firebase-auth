import { createContext, useState } from "react";

export let GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  let [sidebar, setSidebar] = useState(false);
  return (
    <GlobalContext.Provider value={{ sidebar, setSidebar }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
