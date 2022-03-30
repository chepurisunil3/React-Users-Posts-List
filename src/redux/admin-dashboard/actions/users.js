export const setUserDetails = (userDetails) => {
  return {
    type:"SET_USER_DETAILS",
    payload:userDetails
  }
}
export const userSelected = (id) => {
  return {
    type:"USER_SELECTED",
    payload:id
  }
}