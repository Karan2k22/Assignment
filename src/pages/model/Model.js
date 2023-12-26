import React ,{useState} from "react";
import "../../layout/sidebar/Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

const Model = () => {
  const navigate = useNavigate();

  const [data, setdata] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",    "",
    "",
    "",
    "",
    "",    "",
    "",
    "",
    "",
    "",
    "",
  ])
  const styles = {
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '20px',
      border: '1px solid #ddd', // Add this line to add a border to the table
    },
    th: {
      backgroundColor: '#f2f2f2',
      padding: '10px',
      borderBottom: '1px solid #ddd',
    },
    td: {
      padding: '10px',
      borderBottom: '1px solid #ddd',
      textAlign: 'center',
    },
    stickyHeader: {
      position: 'sticky',
      top: '0',
      background: '#f2f2f2',
    },
  };
  
  return (
    <div style={{ width: "80vw" , padding:"20px"  }}>
      <div style={{ height: "20%", background: " "  , padding:"50px"}}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <input style={{ padding:"6px" , width:"180px", borderRadius:"1rem" }} placeholder="Search..." />
         
          <button
            style={{ width: "100px"  , padding:"6px" , cursor:"pointer" , borderRadius:"1rem" , background:"green" , color:"white"}}
      onClick={() => {
        navigate("/add_model")
      }}  
          >
            <FaPlus/>
 {/* <Link to={"/add_model"}> */}
  Add Model
  {/* </Link>    */}
         </button> 
        </div>
      </div>
      <div style={{ maxHeight: "70vh",height:"auto",  overflow:"scroll", background: "" }}>
 


 
    <table style={styles.table } >
      <thead style={styles.stickyHeader}>
        <tr>
          <th style={styles.th}>Sl No.</th>
          <th style={styles.th}>Model name</th>
          <th style={styles.th}>Manufacture Company</th>
          <th style={styles.th}>Make Year</th>
          <th style={styles.th}>Bharat Stage</th>
          <th style={styles.th}>Fuel Tank Capacity</th>
          <th style={styles.th}>Weight</th>
          <th style={styles.th}>No. Of Wheels</th>
          <th style={styles.th}>Dimension</th>
        </tr>
      </thead>
      <tbody>

        {data.map((itm , idx) => {
          return (
            <tr>
              <td style={styles.td}>{idx + 1}</td>
            <td style={styles.td}>
              <Link state={{data : true}} to={"/add_model"}>
              <b>Model Name</b>
              </Link>
              </td>
            <td style={styles.td}>Manufacture Company </td>
            <td style={styles.td}>Make Year </td>
            <td style={styles.td}> Bharat Stage</td>
            <td style={styles.td}>Fuel Tank Capacity</td>
            <td style={styles.td}>Weight</td>
            <td style={styles.td}>No. Of Wheels</td>
            <td style={styles.td}>Dimension</td>
          </tr>
          )
        })}

      </tbody>
    </table>

      </div>
    </div>
  );
};

export default Model;
