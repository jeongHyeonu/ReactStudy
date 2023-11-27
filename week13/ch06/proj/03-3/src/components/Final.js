/**
 * ch11/proj/03-3
 * ./src/components/Final.js
 */

import { useText } from "./TextProvider";

const Final = () => {
  const { text } = useText();

  return (
    <>
      <p>Final component: Text is <b>{text}</b></p>
    </>
  )
};

export default Final;