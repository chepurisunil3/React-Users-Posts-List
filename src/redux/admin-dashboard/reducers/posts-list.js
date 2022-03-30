export const PostsList = (state = {},{type,payload}) => {
  switch(type)
  {
    case "POST_FOR_SINGLE_USER":
      return {...state,[payload.userId]:payload.posts}
    default:
      return state;
  }
}