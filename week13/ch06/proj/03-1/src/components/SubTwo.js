/**
 * ch11/proj/03-1
 * ./src/components/SubTwo.js
 */
import SubThree from "./SubThree";

const SubTwo = ({ text }) => (
  <>
    <h2>SubTwo component</h2>
    <SubThree text={text} />
  </>
);

export default SubTwo;