import React, { useEffect ,useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddFuel = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [update, setupdate] = useState("");

  useEffect(() => {
    try {
       setupdate(location.state.data);
    } catch (error) {
      
    }
  }, [])
  
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
            <h2> Add Fuel</h2>
          </div>

          <div style={{ width: "100%" }}>
            <div style={{ display: "flex" , marginBottom:"12px" }}>
              <div style={{ width: "30%" }}>
                <label>Vehicle No.</label>
                <br />
                <select  style={{padding:"6px" , borderRadius:"4px"}}>
                  <option defaultChecked>Select...</option>
                  <option>JH08IU8989</option>
                  <option>JH08IU8987</option>
                  <option>JH08IU8985</option>
                </select>              </div>

              <div style={{ width: "30%" }}>
                <label>Quantity / Liter</label>
                <br />
                <input  style={{padding:"6px" , borderRadius:"4px"}} type="number" step={0.5}/>
              </div>

              <div style={{ width: "30%" }}>
                <label>Rate</label>
                <br />
                <input  style={{padding:"6px" , borderRadius:"4px"}}type="number" step={0.5} />
              </div>
            </div>

            <div style={{ display: "flex" , marginBottom:"12px" }}>
              <div style={{ width: "30%" }}>
                <label>Date</label>
                <br />
                <input  style={{padding:"6px" , borderRadius:"4px"}}type="date"  />
              </div>

              <div style={{ width: "30%" }}>
                <label>Upload Recipt</label>
                <br />
                <input  style={{padding:"6px" , borderRadius:"4px"}} type="file"  />
              </div>

            </div>

          </div>

          {/* btn  */}
          <div style={{ display: "flex", justifyContent: "flex-end"   }}>
            <button type="button"  onClick={() => {
              alert("Model Created Sucessfully")
                navigate(-1);
              }} style={{padding:"8px" , background:"blue" , color:"white" , margin:"8px"}}> { update ? " Update" : "Submit"}</button>
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

export default AddFuel;