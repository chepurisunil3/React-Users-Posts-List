import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
function Login(props)
{
  const navigate = useNavigate();
  const {setIsLoggedIn,isLoggedIn} = props;
  React.useEffect(() => {
    if(isLoggedIn)
    {
      navigate("/")
    }
  },[isLoggedIn])
  const [adminId,setAdminId] = useState("");
  const [password,setPassword] = useState("");
  const loginUser = (event) => {
    if(adminId == "admin1234" && password == "admin1234")
    {
      localStorage.setItem("isLoggedIn",true)
      setIsLoggedIn(true);
    }
    else {
      alert("Invalid Credentials");
    }
  }
  return (
    <Grid container style={{background:"#666666"}} direction={"column"} justifyContent="center" alignContent="center" alignItems={"center"} height="100vh">
    <Typography variant="h2" style={{color:"white"}}>Admin Panel Login</Typography>
    <form style={{display:"flex",flexDirection:"column"}}>
      <input value={adminId} onChange={(event) => {setAdminId(event.target.value)}} placeholder="Admin Id" style={{margin:"10px 0px",padding:"5px 15px",fontSize:"15px",border:"none",borderRadius:"5px"}} type={"text"} />
      <input placeholder="Password" value={password} onChange={(event) => {setPassword(event.target.value)}} style={{margin:"10px 0px",padding:"5px 15px",fontSize:"15px",border:"none",borderRadius:"5px"}} type={"password"} />
      <Button onClick={loginUser} style={{color:"white",border:"1px solid white",marginTop:"10px"}}>Login</Button>
    </form>
    </Grid>
  )
}

export default Login;