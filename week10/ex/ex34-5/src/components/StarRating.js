/**
 * ch07/ex/ex34-5
 * ./src/components/StarRating.js
 */

import { useState } from "react";
import Star from "./Star";

const createArray = length => [...Array(length)];

const StarRating = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(3);

  return (
    <>
      {createArray(totalStars).map((n, i) => 
        <Star 
          key={i} 
          selected={selectedStars > i} 
          onSelect={() => setSelectedStars(i+1)}          
        />)}
      <p>{selectedStars} of {totalStars} stars</p>
    </>    
  );
}
  
export default StarRating;