/**
 * ch11/proj/03-3
 * ./src/components/TextProvider.js
 */

import { useState, createContext, useContext } from "react";

const TextContext = createContext()
export const useText = () => useContext(TextContext);

const TextProvider = ({ children }) => {
  const [text, setText] = useState("React context");

  return (
    <TextContext.Provider value={{ text, setText }}>
      {children}
    </TextContext.Provider>
  );
}

export default TextProvider;