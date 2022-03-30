import React from "react";
import { useNavigate } from "react-router-dom";
function AdminDashboard(props) 
{
  const {isLoggedIn} = props;
  const navigate = useNavigate();

  React.useEffect(() => {
    if(!isLoggedIn)
      {
        return navigate('/login');
      }
  },[isLoggedIn])
  return (
    <div style={{width:"100vw",height:"100vh"}}>
    <iframe frameBorder="0"
   width="100%"
   height="100%"
   marginHeight="0"
   marginWidth="0"
   scrolling="no" src="/admin-dashboard"></iframe>
    </div>
   
  )
}
export default AdminDashboard;