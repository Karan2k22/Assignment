import React , {useState} from 'react';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
 import Dashboard from "./pages/dashboard/Dashboard";
import Model from "./pages/model/Model";
import Vehicle from "./pages/vehicle/Vehicle"; 
import SideBar from './layout/sidebar/SideBar';
import Header from './layout/header/Header';
import TrackingPage from './pages/trackVehicle/TrackingPage';
import AddModel from './pages/model/AddModel';
import AddFuel from './pages/fuel/AddFuel';
import Service from './pages/service/Service';
import Reminder from './pages/reminder/Reminder';
import AddVehicle from './pages/vehicle/AddVehicle';
const App = () => {

  const [isOpen, setisOpen] = useState(true);

  return (
    <Router >
      <SideBar isOpen={isOpen} setisOpen={setisOpen}>
<Header isOpen={isOpen} setisOpen={setisOpen}/>
     

      <div style={{width:isOpen ?"80vw" :"100%", overflow:"hidden"}}>

      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/model" element={<Model />} />
        <Route path="/add_model" element={<AddModel />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/add_vehicle" element={<AddVehicle />} />
        <Route path="/track" element={<TrackingPage />} />
        <Route path="/add_fuel" element={<AddFuel />} />
        <Route path="/service" element={<Service />} />
        <Route path="/reminder" element={<Reminder />} />
      </Routes>
      </div>
      </SideBar>
     </Router>
  );
};

export default App;
