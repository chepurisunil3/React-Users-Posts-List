import { Button, Drawer, Grid} from "@mui/material";
import React, { useEffect, useState } from "react";
import { PostsSelected } from "./posts-selected";
import { ProfileSelected } from "./profile-selected";
export default function UserDetails(props)
{
  const {setShouldOpenDrawer,selectedUserDetails,selectedType,shouldOpenDrawer,setSelectedType} = props;
  const [userPosts,setUserPosts] = useState({});
  const [isLoading,setIsLoading] = useState(true);
  const closeDrawer = () => {
    setShouldOpenDrawer(false);
  }

  const profileSelected = () => {
    setSelectedType("Profile");
  }

  const postsSelected = () => {
    setSelectedType("Posts");
  }

  useEffect(() => {
    if(selectedType == "Posts")
    {
      if(!userPosts.hasOwnProperty(selectedUserDetails.id))
      {
        setIsLoading(true);
        getUserPosts()
      }
    }
    else {
      setIsLoading(false);
    }
  },[selectedType,selectedUserDetails])

  const getUserPosts = async () => {
    const postsPromise = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUserDetails.id}`)
    const posts = await postsPromise.json();
    setUserPosts({...userPosts,[selectedUserDetails.id]:posts});
    setIsLoading(false);
  }

  return <>
  <Drawer anchor="right" open={shouldOpenDrawer} onClose={closeDrawer}>
    {isLoading ?
    <Grid container width={"40vw"} height="100%" direction={"row"} style={{background:"gray"}} justifyContent="center" alignContent={"center"} alignItems="center">
      <h4 style={{color:"white"}}>Getting Data Please wait...</h4>
    </Grid>
     :
    <Grid container width={"40vw"} height="100%" direction={"row"} style={{background:"gray"}}>
      {selectedType == "Profile" ? <ProfileSelected selectedUserDetails = {selectedUserDetails} /> : <PostsSelected selectedUserDetails = {selectedUserDetails} userPosts = {userPosts.hasOwnProperty(selectedUserDetails.id) ? userPosts[selectedUserDetails.id]:{}} />}
      <Grid item style={{display:"flex",width:"max-content",flexDirection:"column",flexBasis:"20%",alignContent:"center",alignItems:"center",justifyContent:"center"}}>
        <Button onClick={profileSelected} style={{background:selectedType == "Posts" ? "gray" : "white"}}>Profile</Button>
        <Button onClick={postsSelected} style={{background:selectedType == "Profile" ? "gray" : "white"}}>Posts</Button>
      </Grid>
    </Grid>}
  </Drawer>
  </>;
}