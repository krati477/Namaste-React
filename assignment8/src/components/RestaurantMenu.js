import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_RESTAURANT, IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const ReastaurantMenu = () => {
  const params = useParams();
  //console.log(params);
  const { id } = params;
  console.log(GET_RESTAURANT+id);

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(GET_RESTAURANT + id);
    //
    const fetchData = await data.json();
    console.log(fetchData.data, "First Data");
    setRestaurant(fetchData.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>{restaurant.name}</h1>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.areaSlug}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} starts</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
      </div>
      <div className="menu-list">
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items)?.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <h3>{item.price}paisa</h3>
              <img src={IMG_CDN_URL + item.cloudinaryImageId} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReastaurantMenu;
