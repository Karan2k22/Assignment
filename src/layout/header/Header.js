import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

const Header = ({isOpen, setisOpen}) => {
  return (
    <div style={{
      background: "",
      borderBottom: "2px solid black",
      marginBottom: " ",
      width: isOpen ? "80vw" : "100vw",
      padding: "16px",
      display: "flex",
      justifyContent: "flex-end",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Add boxShadow property
    }}>
      <span style={{marginRight:"18px"}}><IoMdNotificationsOutline size={22} style={{cursor:"pointer"}} onClick={() => alert("Comming Soon...")}/></span>
      <span><FaRegUserCircle size={22} style={{cursor:"pointer"}} onClick={() => alert("Comming Soon...")}/></span>
    </div>
  );
};

export default Header;
