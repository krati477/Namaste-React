import { useEffect, useState } from "react";
import { GET_RESTAURANT, RESTAURANT_API } from "../constants";

const useRestaurant = (props) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    
    if(props.id !== null) {
      const data = await fetch(GET_RESTAURANT + props.id);      
      const fetchData = await data.json();      
      setRestaurant(fetchData.data);
    }
    
    if(props.id === null) {
        const data = await fetch(RESTAURANT_API);
        const fetchJson = await data.json();
        setRestaurant(fetchJson?.data?.cards[2]?.data?.data?.cards);
    }
  }

  return restaurant;
};

export default useRestaurant;
