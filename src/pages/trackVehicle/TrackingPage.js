import React , { useState} from 'react'
import BingMap from '../../component/Map'

const TrackingPage = () => {


    const [first, setfirst] = useState(["","","" , "" ,"" ,"", "", "", "" , "" ,""]);
  return (
    <div style={{background:"", height:"90vh", display:"flex", justifyContent:"space-between"}}>
        <div style={{background:"" , minHeight:"100vh",overflowY:"scroll", width:"30%", padding:"8px"}}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <span>Active Vehicle</span>
                <span>0</span>
            </div>
            {first.map((itm , index) => {
                return (
                    <Card/>
                )
            })}
        </div>
        <div style={{background:"" , minHeight:"100vh" ,  width:"68%"}}>
                <BingMap apiKey={'AreWJn8K291hmsuPNwAQry22ZtIdPIff5z5e3U6nLbYUyYQwA85ooprg6_3A6VyN'} height={"100vh"} width={"100%"} value={[22.7874719  ,86.20147450000002]} />
  
        </div>
    </div>
  )
}



const Card = () => {
    return (
        <>
        <div style={{width:"100%", height:"180px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", margin:"5px", padding:"8px 8px 8px 8px"}}>

<div style={{display:"flex" , justifyContent:"space-between" , padding:"6px"}}>
    <span>


    <b>
        JH98KJ7876
    </b>
    </span>

    <span>
        <button>
            Track
        </button>
    </span>
</div>
<div>
    <b>
        Model : 
    </b>
    TATA
</div>

<div>
   <b> Driver :</b> 9877877878
</div>
<div>
    <b>Add :</b> kunj nagar , sonari , jamshedpur
</div>
<div>
    <b>Pin Code :</b> 785412 
</div>
        </div>
        </>
    )
}
export default TrackingPage