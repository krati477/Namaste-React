import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState, useEffect } from "react";
//import { RESTAURANT_API } from "../constants.js";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useRestaurant from "../utils/useRestaurant";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

//https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.733078514704896&lng=75.89587446302176&page_type=DESKTOP_WEB_LISTING
  //empty dependency array => once after render
  //dependency array [searchText] => once after initial render + everytime (my searchText changes)

  
  const getRestaurants = useRestaurant({"id": null});

  
  useEffect(() => {
    setAllRestaurants(getRestaurants);
    setFilteredRestaurants(getRestaurants);
  }, [getRestaurants]);

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline, please check your internet connection.!</h1>;
  } 

  //Early return
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className=" block mx-auto text-center">
        <input
          type="text"
          className="bg-white w-96 border border-yellow-900 my-2  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-orange-800 sm:text-sm"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className=" bg-orange-800 h-10 mb-5 w-28 text-cyan-50 rounded-sm  text-center align-middle py-2 m-4"
          onClick={() => {
            //need to filter the data
            const fdata = filterData(searchInput, allRestaurants);
            //update the state - restaurants
            setFilteredRestaurants(fdata);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap mx-auto items-center w-4/5l">
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurant match your search...!!</h1>
        ) : (
          filteredRestaurants?.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data}  />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
