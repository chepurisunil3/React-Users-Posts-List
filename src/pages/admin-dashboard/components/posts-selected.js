import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
export const PostsSelected = (props) => {
    const {userPosts,selectedUserDetails} = props;
    return <Grid item style={{display:"flex",width:"max-content",flexDirection:"column",flexBasis:"80%",alignContent:"center",alignItems:"center",justifyContent:"center", height:"100%",overflowY:"auto"}}>
        <Avatar alt={selectedUserDetails.name} src=""/>
        <Typography style={{fontWeight:"bolder",fontSize:"20px"}}>{selectedUserDetails.name}</Typography>
        <Grid item style={{height:"80%",overflowY:"auto",width:"100%"}}>
        {userPosts.length > 0 &&
        userPosts.map((eachPost) => {
          return <Grid key={eachPost.id} style={{margin:"auto",width:"95%",background:"white",borderRadius:"5px"}}>
            <h2 style={{padding:"5px 10px",fontSize:"15px"}}>{eachPost.title}</h2>
            <Typography style={{padding:"5px 10px",fontSize:"12px"}}>{eachPost.body}</Typography>
          </Grid>
        })
        }
        </Grid>
      </Grid>
}