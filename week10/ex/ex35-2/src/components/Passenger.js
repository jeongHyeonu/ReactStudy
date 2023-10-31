/**
 * ch07/ex/ex35-2
 * ./src/components/Passenger.js
 */

import { GiBabyFace } from "react-icons/gi";

const Passenger = ({ count = 0 }) => {
  return (
    <div style={{ height: 40 }}>
      {[...Array(count)].map((e, i) => <GiBabyFace size={30} key={i} color="grey" />)}
    </div>
  );
};

export default Passenger;