import React ,{useState} from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css';
import { FaBars } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";
import { FaTruckFront } from "react-icons/fa6";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { HiBell } from "react-icons/hi";
import { AiFillTool } from "react-icons/ai";

const SideBar = ({children , isOpen , setisOpen}) => {

    // const [isOpen, setisOpen] = useState(true);
    const toggle = () => {
        setisOpen(!isOpen);
    }
  const navItem = [
    {
      path: "/",
      name: "Dashboard",
      // icons: "#",
    },
    {
      path: "/model",
      name: "Model",
      icons: "#",
    },
    {
      path: "/vehicle",
      name: "Vehicle",
      icons: <FaTruckFront/>,
    },
    {
      path: "/add_fuel",
      name: "Fuel",
      icons: <BsFillFuelPumpFill/>,
    },
    {
      path: "/track",
      name: "Active Vehicle",
      icons: <MdCardTravel/>,
    },
   
    {
      path: "/service",
      name: "Service",
      icons: <AiFillTool/>,
    },
    {
      path: "/reminder",
      name: "Reminders",
      icons: <HiBell/>,
    },

  ];
  return (
    <div className="container">
      <div style={{width : isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="topsection">
          <h1 style={{display :  isOpen ? "block" : "none" }} className="logo">VMS</h1>

          {/* <div style={{ marginLeft : isOpen ? "150px" : "0px"}} className="bars" onClick={toggle}><FaBars /></div> */}
        </div>
        {navItem.map((item, index) => {
            return (
                <NavLink
                to={item.path}
                key={index}
                className="link"
                activeClassName="active"
              >
                <div className="icon">{item?.icons}</div>
                <div style={{display :  isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
              </NavLink>
            )
           
          })
        }
      </div>

      <main>{children}</main>
    </div>
  );
};

export default SideBar;
