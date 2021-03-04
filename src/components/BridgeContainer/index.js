import React from "react";

export const BridgeContext = React.createContext();

export const BridgeContainer = ({ value, children }) => {
  return (
    <BridgeContext.Provider value={{ ...value }}>
      {children}
    </BridgeContext.Provider>
  );
};
