/**
 * proj_path: ch06/ex/ex-32-2
 * ./src/components/StarRating.js
 */

import { useState } from "react";
import Star from "./Star";

const createArray = length => [...Array(length)];

const StarRating = ({ totalStars = 5 }) => {
    const [selectedStars, setSelectdStars] = useState(3);        // 상태변수 지정, 상태변경함수 추가

    return (
        <>
            {
                createArray(totalStars).map((n, i) =>
                    <Star
                        key={i} 
                        selected={selectedStars > i}
                        onSelect={() => setSelectdStars(i+1)}
                    />
                )
            }
            <p>{selectedStars} of {totalStars} stars</p>
        </>
    );
}

export default StarRating;
