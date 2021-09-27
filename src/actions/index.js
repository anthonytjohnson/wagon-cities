import cities from "../cities";

export function setCities() {
  return {
    type: "SET_CITIES",
    payload: cities
  };
}

export function selectCity(city) {
  return {
    type: "CITY_SELECTED",
    payload: city
  };
}

