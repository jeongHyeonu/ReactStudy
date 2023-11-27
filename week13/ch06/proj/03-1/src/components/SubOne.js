/**
 * ch11/proj/03-1
 * ./src/components/SubOne.js
 */
import SubTwo from "./SubTwo";

const SubOne = ({ text }) => (
  <>
    <h2>SubOne component</h2>
    <SubTwo text={text} />
  </>
);

export default SubOne;