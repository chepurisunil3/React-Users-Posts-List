export const setPostsForUser = (posts,userId) => {
  return {
    type:"POST_FOR_SINGLE_USER",
    payload:{userId,posts}
  }
}