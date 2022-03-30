import React, { useState } from 'react';
import { Provider } from 'react-redux';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import './App.css';
import AdminDashboard from './pages/admin-dashboard/admin-dashboard';
import DashboardView from './pages/admin-dashboard/components/dashboard-view';
import Login from './pages/login/login';
import configureStore from './redux/admin-dashboard/store';

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const store = configureStore();
  React.useEffect(() => {
    if(localStorage.getItem("isLoggedIn"))
    {
      setIsLoggedIn(true);
    }
    else {
      setIsLoggedIn(false);
    }
  },[])
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/admin-dashboard' element={<DashboardView />} />
          <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path='/' element={<AdminDashboard isLoggedIn={isLoggedIn}/>} /> 
      </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
