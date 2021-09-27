export default function(state, action) {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case "CITY_SELECTED":
      return action.payload;
    default:
      return state;
  }
}
