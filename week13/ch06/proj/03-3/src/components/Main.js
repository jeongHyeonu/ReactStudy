/**
 * ch11/proj/03-3
 * ./src/components/Main.js
 */
import TextProvider from "./TextProvider";
import SubOne from "./SubOne";

const Main = () => {
  
  return (
    <TextProvider>
      <h1>Main component</h1>
      <SubOne />
    </TextProvider>    
  )
};

export default Main;