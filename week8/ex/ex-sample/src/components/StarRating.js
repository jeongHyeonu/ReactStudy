import Star from "./Star";

const createArray = length => [...Array(length)];

const StarRating = ({totalStars = 5}) => (
  createArray(totalStars).map((n,i)=>
    <Star key = {i} />
  )
);

export default StarRating