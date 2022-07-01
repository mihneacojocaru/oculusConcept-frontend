import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currentMode, setCurrentMode] = useState('standard');

  useEffect(() => {
    if (Cookies.get('currentMode'))
      setCurrentMode(JSON.parse(Cookies.get('currentMode')));
  });

  return (
    <StateContext.Provider value={{ currentMode, setCurrentMode }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
