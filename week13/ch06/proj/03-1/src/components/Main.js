/**
 * ch11/proj/03-1
 * ./src/components/Main.js
 */
import { useState } from "react";
import SubOne from "./SubOne";

const Main = () => {
  const [text, setText] = useState("React context");
  
  return (
    <>
      <h1>Main component</h1>
      <SubOne text={text} />
    </>
  )
};

export default Main;