import { setUserDetails } from "../actions/users"

export const getUserDetails = () => async (dispatch,getState) => {
  const userDetailsPromise = await fetch("https://jsonplaceholder.typicode.com/users")
  const userDetails = await userDetailsPromise.json()
  dispatch(setUserDetails(userDetails))
}