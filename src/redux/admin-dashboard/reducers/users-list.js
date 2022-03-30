export const UsersList = (state = {usersList:[],userSelected:-1},{type, payload}) => {
  switch(type)
  {
    case "SET_USER_DETAILS":
      return {usersList:payload}
    case "USER_SELECTED":
      return {...state,userSelected:payload}
    default:
      return state;
  }
};