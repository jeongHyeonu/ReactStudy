/**
 * ch11/proj/03-2
 * ./src/components/Main.js
 */
import { useState, createContext } from "react";
import SubOne from "./SubOne";

export const CreateContext = createContext()

const Main = () => {
  const [text, setText] = useState("React context");
  
  return (
    <CreateContext.Provider value={text}>
      <h1>Main component</h1>
      <SubOne text={text} />
    </CreateContext.Provider>
  )
};

export default Main;