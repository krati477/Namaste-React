import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState, useEffect } from "react";
import { RESTAURANT_API } from "../constants.js";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {filterData} from "../utils/helper";


const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  

  //https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.733078514704896&lng=75.89587446302176&page_type=DESKTOP_WEB_LISTING
  //empty dependency array => once after render
  //dependency array [searchText] => once after initial render + everytime (my searchText changes)

  useEffect(()=>{
    console.log("check");
  });
  
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(RESTAURANT_API);
    const fetchJson = await data.json();
    //console.log(fetchJson);

    setAllRestaurants(fetchJson?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(fetchJson?.data?.cards[2]?.data?.data?.cards);
  }

  //Early return
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
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
      <div className="restaurant-list">
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurant match your search...!!</h1>
        ) : (
          filteredRestaurants?.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;