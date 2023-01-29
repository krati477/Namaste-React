import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
}) => {
  return (
    <div className="h-[300] w-56 justify-between p-3 rounded-sm my-8 mx-[14] items-center border-2 border-yellow-600 ">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="text-orange-900 py-1 font-semibold text-lg">{name}</h2>
      <h3 style={{ wordWrap: "break-word" }} className="text-orange-900 py-2 text-sm">{cuisines.join(", ")}</h3>
      <h4 className="text-orange-900 ">{lastMileTravelString}</h4>
    </div>
  );
};

export default RestaurantCard;
