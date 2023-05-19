import React, { useEffect, useState } from 'react';
import "./Dashboard.css";
import { useAuth } from '../service/Theme';
import { database } from '../service/firebase';



export default function Dashboard() {
  const [checked, setChecked] = useState(false);
  const {bg, loginuser} =  useAuth()

  const getvb = async()=>{
    if (checked=== true){
      await database.doc("gb/4dt3VE6DhYC4FTvQFOiW").update({
        bg:"intails"
      })
     }else{
      await database.doc("gb/4dt3VE6DhYC4FTvQFOiW").update({
        bg:"un-intails"
      })
     }
  }
  useEffect(() => {

    getvb()
  }, [checked])
  
  
  
  const handleTheme = () => {
    setChecked(!checked);
  };


  return (

    <div>

      <div className="mode_switch">
        <div className="Uname">
          <p className='red'>Welcome {loginuser.length !== 0 ? loginuser.fullname : ""}</p>
          <p className='today'>How are you doing today?</p>
        </div>
        {/* <div className="switch"> */}
          <div class="flipswitch">
            <input type="checkbox" onChange={handleTheme} name="flipswitch" class="flipswitch-cb" id="fs" checked={checked}/>
              <label class="flipswitch-label" for="fs">
                <div class="flipswitch-inner"></div>
                <div class="flipswitch-switch"></div>
              </label>
          {/* </div> */}
        </div>
      </div>


      <div className="dash-container">
        <div className="dashcontent">
          <div className="dash-left">
            <div className="chart_log">
              <div><img src="/img/gettyix612.jpg" alt="" className='chart_img' /></div>
              <div><img src="/img/gettyix612.jpg" alt="" className='chart_img' /></div>
              <div><img src="/img/gettyimages-.jpg" alt="" className='chart_img' /></div>
            </div>
            <div className="chart_log2">
              <div className="log2a">
                <img src="/img/download.jpg" alt="" className='chart_img' />
              </div>
              <div className='log2b'>
                <img src="/img/gettyimages-13612.jpg" alt="" className='chart_img' />
                {/* <img src="/img/download.jpg" alt="" className='chart_img' /> */}
                {/* <img src="/img/gettyimages-.jpg" alt="" className='chart_img' />
                <img src="/img/gettyimages-.jpg" alt="" className='chart_img' /> */}
              </div>
            </div>
          </div>
          <div className="dash-right">
            <div className="chart_log1">
              <div><img src="/img/ge.jpg" alt="" className='chart_img' /></div>
              <div><img src="/img/gett.jpg" alt="" className='chart_img' /></div>
            </div>
            <div className="chart_log1">
              <div><img src="/getty.jpg" alt="" className='chart_img' /></div>
              <div><img src="/img/gettyimages-472.jpg" alt="" className='chart_img' /></div>
            </div>
          </div>
        </div>
      </div>


      <div className="straight"></div>

    </div>
  )
}
