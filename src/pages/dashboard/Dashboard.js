import React from 'react'

const Dashboard = () => {
  return (
    <div style={{background:"", width:"" , padding:"20px"}}>
     <div style={{display:"flex", justifyContent:"center"}}>
       <h1>Dashboard</h1>
      </div>
      <div style={{width:"100%", display:"flex" , justifyContent:"space-between", padding:"10px", height:"180px", background:""}}>

<div style={{width:"20%" ,  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", textAlign:"center"}}>
  <h4>All Vehicle</h4><br/>
  <p>30</p>
</div>
<div style={{width:"20%" , boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" , textAlign:"center"}}>
<h4>Active Vehicle</h4><br/>
  <p>10</p>
</div>
<div style={{width:"20%" , boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" , textAlign:"center"}}>
<h4>Not in Used</h4><br/>
  <p>10</p>
</div>
      </div>

      <div style={{width:"100%", display:"flex" , justifyContent:"space-between", padding:"10px", height:"180px", background:""}}>

<div style={{width:"50%" ,  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", textAlign:"center"}}>
  Donuct Chart
</div>
<div style={{width:"50%" , boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" , textAlign:"center"}}>
Pie Chart
</div>

      </div>
    </div>
  )
}

export default Dashboard