/**
 * ch11/proj/03-2
 * ./src/components/Final.js
 */

import { useContext } from "react";
import { CreateContext } from "./Main";

const Final = () => {
  const text = useContext(CreateContext);

  return (
    <>
      <p>Final component: Text is <b>{text}</b></p>
    </>
  )
};

export default Final;