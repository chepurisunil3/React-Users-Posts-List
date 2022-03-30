import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React, { useState } from "react";
import UserDetails from "./user-details";
function DashboardView(props)
{;
  const columnsToDisplay = ["name","username","email","phone","website"];
  const [usersList,setUsersList] = useState([]);
  const [columns,setColumns] = useState([]);
  const [shouldOpenDrawer,setShouldOpenDrawer] = useState(false);
  const [selectedUserDetails,setSelectedUserDetails] = useState({});
  const [selectedType,setSelectedType] = useState("Profile");
  React.useEffect(() => {
    //dispatch(getUserDetails()) use this method to get the data and update the redux from middleware thunk
    getUserDetails()
  },[])

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const viewProfile = (id) => {
  setSelectedType("Profile");
  const selectedUser = usersList.filter((eachuser) => {return eachuser.id == id});
  setSelectedUserDetails(selectedUser[0]);
  setShouldOpenDrawer(true);
  //dispatch(userSelected(id)); use this to store in redux store
}

const viewPosts = (id) => {
  setSelectedType("Posts");
  const selectedUser = usersList.filter((eachuser) => {return eachuser.id == id});
  setSelectedUserDetails(selectedUser[0]);
  setShouldOpenDrawer(true);
  //dispatch(userSelected(id)); use this to store in redux store
}
  const getUserDetails = async () => {
    const userDetailsPromise = await fetch("https://jsonplaceholder.typicode.com/users")
    const userDetails = await userDetailsPromise.json()
    setUsersList(userDetails);
    //dispatch(setUserDetails(userDetails)) use this to store in redux store
    if(userDetails?.length > 0)
    {
      const keys = Object.keys(userDetails[0]);
      let columnsList = [];
      keys.forEach((eachKey) => {
        if(columnsToDisplay.indexOf(eachKey) >= 0)
        {
          let column = {field:eachKey,headerName:capitalizeFirstLetter(eachKey),sortable:true}
          columnsList.push(column);
        }
      })
      columnsList.push({field:"viewProfile",headerName:"",sortable:false})
      columnsList.push({field:"viewPosts",headerName:"",sortable:false})
      setColumns(columnsList)
    }
  }
  return <>
    <div style={{width:"100%",height:"98vh",overflowY:"auto", position:"relative"}}>
    <h2 style={{textAlign:"left",paddingLeft:"5%"}}>Users Details:</h2>
    <Table style={{width:"90%",marginLeft:"5%",border:"1px solid gray"}} stickyHeader>
    <TableHead>
      <TableRow>
        {columns.map((eachColumn) => {
          return <TableCell key={eachColumn.field}>{eachColumn.headerName}</TableCell>
        })}
      </TableRow>
    </TableHead>
    <TableBody>
      {usersList.map((eachUser) => {
        return <TableRow key={eachUser.username}>
            {Object.keys(eachUser).map((eachField) => {
              if(columnsToDisplay.indexOf(eachField) >= 0)
              {
                return <TableCell key={eachField}>{eachUser[eachField]}</TableCell>
              } 
            })}
            <TableCell style={{color:"blue",cursor:"pointer",textDecoration:"underline"}} onClick={() => {viewProfile(eachUser.id)}}>View Profile</TableCell>
            <TableCell style={{color:"blue",cursor:"pointer",textDecoration:"underline"}} onClick={() => {viewPosts(eachUser.id)}}>View Posts</TableCell>
        </TableRow>
      })}
    </TableBody>
  </Table>
      <UserDetails setShouldOpenDrawer = {setShouldOpenDrawer} setSelectedType = {setSelectedType} shouldOpenDrawer = {shouldOpenDrawer} selectedUserDetails = {selectedUserDetails} selectedType = {selectedType}/>
    </div>
  </>
}

export default DashboardView;