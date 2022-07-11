import { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [utilities, setUtilities] = useState([]);
  return (
    <AppContext.Provider
      value={{
        userInfoState: [userInfo, setUserInfo],
        utilitiesState: [utilities, setUtilities],
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export default AppContextProvider;
