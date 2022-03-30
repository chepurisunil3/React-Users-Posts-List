import { Avatar, Grid, Typography } from "@mui/material"

export const ProfileSelected = ({selectedUserDetails}) => {
  return <Grid item style={{display:"flex",width:"max-content",flexDirection:"column",flexBasis:"80%",alignContent:"center",alignItems:"center",justifyContent:"center", height:"100%",overflowY:"auto"}}>
        <Avatar alt={selectedUserDetails.name} src=""/>
        <Typography style={{fontWeight:"bolder",fontSize:"20px"}}>{selectedUserDetails.name}</Typography>
        <Grid style={{width:"100%",padding:"10px"}}>
          <Typography style={{fontWeight:"bold",fontSize:"15px",margin:"10px 0 5px 0"}}>Email:</Typography>
          <input disabled style={{width:"50%",padding:"5px 10px"}} type="text" value={selectedUserDetails.email} />
        </Grid>
        <Grid style={{width:"100%",padding:"10px"}}>
          <Typography style={{fontWeight:"bold",fontSize:"15px",margin:"10px 0 5px 0"}}>Address:</Typography>
          <input disabled style={{width:"50%",padding:"5px 10px"}} type="text" value={selectedUserDetails.address?.street} />
        </Grid>
        <Grid style={{width:"100%",padding:"10px"}}>
          <Typography style={{fontWeight:"bold",fontSize:"15px",margin:"10px 0 5px 0"}}>Phone:</Typography>
          <input disabled style={{width:"50%",padding:"5px 10px"}} type="text" value={selectedUserDetails.phone} />
        </Grid>
        <Grid style={{width:"100%",padding:"10px"}}>
          <Typography style={{fontWeight:"bold",fontSize:"15px",margin:"10px 0 5px 0"}}>Website:</Typography>
          <input disabled style={{width:"50%",padding:"5px 10px"}} type="text" value={selectedUserDetails.website} />
        </Grid>
        <Grid style={{width:"100%",padding:"10px"}}>
          <Typography style={{fontWeight:"bold",fontSize:"15px",margin:"10px 0 5px 0"}}>Company Name:</Typography>
          <input disabled style={{width:"50%",padding:"5px 10px"}} type="text" value={selectedUserDetails.company?.name} />
        </Grid>
      </Grid>
}