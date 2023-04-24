import { FaStar } from "react-icons/fa";

const Star = ({ selected = false }) => {
  <FaStar color={selected ? "red" : "grey"} />;
};
const createArray = (length) => {
  return [...Array(length)];
};

export default function StarRating({ totalStars = 5 }) {
  //   return createArray(totalStars).map((n, i) => {
  //     <Star key={i} />;
  //   });

  return [<Star selected={false}></Star>, <Star selected={true}></Star>];

  //   return [<FaStar color="red"></FaStar>, <FaStar color="grey"></FaStar>];
}
