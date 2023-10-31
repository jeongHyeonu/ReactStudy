/**
 * ch07/ex/ex35-2
 * ./src/components/Door.js
 */

import { FaDoorOpen, FaDoorClosed } from "react-icons/fa";

const Door = ({ full = false }) => {
  return (
    <div style={{ height: 60 }}>
      {!full && <FaDoorOpen color="grey" size={50} />}
      {full && <FaDoorClosed color="grey" size={50} />}
    </div>
  )
};

export default Door;