import React from "react";
import { useNavigate } from "react-router-dom";

const AddVehicle = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        background: "",
        padding: "20px",
      }}
    >
      <div style={{ margin: "20px" }}>
        <form style={{ background: "#ebe7e7", padding: "30px" }}>
          <div style={{ marginBottom: "20px" }}>
            <h2>Add Vehicle</h2>
          </div>

          <div style={{ width: "100%" }}>
            <div style={{ display: "flex" , marginBottom:"12px" }}>
              <div style={{ width: "30%" }}>
                <label>Vehicle No.</label>
                <br />
                <input type="text" style={{padding:"6px" , borderRadius:"4px"}}/>
              </div>

              <div style={{ width: "30%" }}>
                <label>Model Name</label>
                <br />
                <select  style={{padding:"6px" , borderRadius:"4px"}}>
                  <option defaultChecked>Select...</option>
                  <option>Model 1</option>
                  <option>Model 1</option>
                  <option>Model 1</option>
                </select>
              </div>

              <div style={{ width: "30%" }}>
                <label>Reg. Year</label>
                <br />
                <input type="date"  style={{padding:"6px" , borderRadius:"4px"}}/>
              </div>

              <div style={{ width: "30%" }}>
                <label>Ownaer Name</label>
                <br />
                <input  style={{padding:"6px" , borderRadius:"4px"}}type="text" />
              </div>
            </div>

       

            <div style={{ display: "flex" , marginBottom:"12px" }}>
              <div style={{ width: "30%" }}>
                <label>RC Book</label>
                <br />
                <input  style={{padding:"6px" , borderRadius:"4px"}} type="file"  />
              </div>

              <div style={{ width: "30%" }}>
                <label>Insurance  </label>
                <br />
                <input  style={{padding:"6px" , borderRadius:"4px"}} type="file" />
              </div>
              <div style={{ width: "40%" }}>
                <label>Polution</label>
                <br />
                <input style={{height:"180px"  ,width:"100%" }} type="file"/>
              </div>
            </div>
          </div>

          {/* btn  */}
          <div style={{ display: "flex", justifyContent: "flex-end"   }}>
            <button type="button"  onClick={() => {
              alert("Model Created Sucessfully")
                navigate(-1);
              }} style={{padding:"8px" , background:"blue" , color:"white" , margin:"8px"}}>Submit</button>
            <button
              type="button"
              onClick={() => {
                navigate(-1);
              }}
              style={{padding:"8px" , background:"red" , color:"white"  ,margin:"8px"}}
            >
              Cancle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVehicle;


 