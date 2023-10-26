/**
 * proj_path: ch06/ex/ex-32-2
 * ./src/components/Star.js
 */

// import module FaStar from react-icons/fa
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = f => f }) => 
    <FaStar
        color={selected ? "red" : "grey"}
        onClick={onSelect}
    />

// export module
export default Star;
