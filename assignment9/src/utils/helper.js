export function filterData(searchInput, allRestaurants) {
    if (searchInput === "") {
      return allRestaurants;
    }
    const data = allRestaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
    );
    return data;
  }
  