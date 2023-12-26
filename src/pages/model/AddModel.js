import React, { useEffect ,useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddModel = () => {
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
            <h2> { update ? "Update Model " : "Add Model"}</h2>
          </div>

          <div style={{ width: "100%" }}>
            <div style={{ display: "flex" , marginBottom:"12px" }}>
              <div style={{ width: "30%" }}>
                <label>Model name</label>
                <br />
                <input type="text" style={{padding:"6px" , borderRadius:"4px"}}/>
              </div>

              <div style={{ width: "30%" }}>
                <label>Manufacture Company</label>
                <br />
                <input  style={{padding:"6px" , borderRadius:"4px"}}/>
              </div>

              <div style={{ width: "30%" }}>
                <label>Make Year</label>
                <br />
                <input  style={{padding:"6px" , borderRadius:"4px"}}type="date" />
              </div>
            </div>

            <div style={{ display: "flex" , marginBottom:"12px" }}>
              <div style={{ width: "30%" }}>
                <label>Bharat Stage</label>
                <br />
                <select  style={{padding:"6px" , borderRadius:"4px"}}>
                  <option defaultChecked>Select...</option>
                  <option>4G</option>
                  <option>5G</option>
                  <option>6G</option>
                </select>
              </div>

              <div style={{ width: "30%" }}>
                <label>Fuel Tank Capacity</label>
                <br />
                <input  style={{padding:"6px" , borderRadius:"4px"}} type="number" step={0.5} />
              </div>

              <div style={{ width: "30%" }}>
                <label>Dimension</label>
                <br />
                <input  style={{padding:"6px" , borderRadius:"4px"}} type="text" />
              </div>
            </div>

            <div style={{ display: "flex" , marginBottom:"12px" }}>
              <div style={{ width: "30%" }}>
                <label>Weight</label>
                <br />
                <input  style={{padding:"6px" , borderRadius:"4px"}} type="number" step={0.5} />
              </div>

              <div style={{ width: "30%" }}>
                <label>No. Of Wheels </label>
                <br />
                <input  style={{padding:"6px" , borderRadius:"4px"}} type="number" />
              </div>
              <div style={{ width: "40%" }}>
                <label>Description</label>
                <br />
                <textarea style={{height:"180px"  ,width:"100%" }}/>
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

export default AddModel;
