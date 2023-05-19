import React, { useState } from "react";
import Sidemenue from "../components/Sidemenue"
import Dashboard from "../components/Dashboard";
import "../App.css"
import { getBg, getbg } from "../service/getuser.service";
import { useEffect } from "react";


function DashboardPage() { 

  const [bg, setbg]= useState("initial")

useEffect(() => {
  getbg((res)=>{
    setbg(res.bg)
  })
}, [])

  return (
    <div>     
      <div className="pagecon">
        <div className="pagecontent">
          <div className="headersisecoadmin">
            <Sidemenue />
          </div>
          <div className="otherssecoth">
            <div className="dashboardconteier">
              <div className={bg === "intails"  ? "topmenuecontrenr-white"  : "topmenuecontrenr"}  >
              
                <Dashboard/> 
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>

  
  );
}

export default DashboardPage;