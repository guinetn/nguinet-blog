import React, { createContext } from "react";

const ConfigContext = createContext();

const ConfigContextProvider = ({ children, config }) => {
return (
    // the Provider gives access to the context to its children
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
};

export { ConfigContext, ConfigContextProvider }