

import {React, useState, } from 'react';
import "./User.css";
import {MdOutlineCancel} from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../service/Theme';
import { getbg } from '../service/getuser.service';
import { useEffect } from 'react';




function Login() {
    const [email, setlogEmail]= useState();
    const [pwd, setlogPassword] =useState();
    const [loading, setloading] = useState(false)
    const [message, setmessage] = useState("")
    const {login} = useAuth()

    const handleLogin = async (e) => {
        e.preventDefault()

        if (email === "" || pwd === "") {
            setmessage("no value entered")
            return
        }
  
        setloading(true)
      try {
       await login(email,pwd).then((res)=>{
        console.log(res)
       })
       navigate("/")
      } catch (error) {
        
      }
      setloading(false)
    }

    const [bg, setbg]= useState("initial")

    useEffect(() => {
      getbg((res)=>{
        setbg(res.bg)
      })
    }, [])





    const navigate = useNavigate();
    return (
        
        <div className= {bg === "intails"  ? "mainLogin-white"  : "mainLogin"} >
            <div className="Login_container">
                <form action="">

                    <div className="center">

                        <div className={bg === "intails"  ? "allcontainers-white"  : "allcontainers"} onClick={() => navigate("/")} >
                            <MdOutlineCancel/>
                        </div>


                        <div className="cancel_logo">
                        <img src="/img/apple.png" alt="" className='sys-logo'/>
                        </div>

                        <center><h3>LOGIN</h3></center>

                        <div >
                            <label  className='label'>Email</label>
                            <div><input type="text" placeholder='Enter Your Email' id='email' className={bg === "intails"  ? "log-input-white"  : "log-input"} 
                            onChange={(event => {setlogEmail(event.target.value)
                            })} required/>
                            </div>
                        </div>

                        <div>
                            <label  className='label'>Password</label>
                            <div><input type="password" placeholder='Enter Your password' id='pwd' className={bg === "intails"  ? "log-input-white"  : "log-input"} 
                            onChange={(event=>{setlogPassword(event.target.value
                                )})} required/></div>
                        </div>

                        <div className={bg === "intails"  ? "checker-white"  : "checker"}>
                            <div className="checkBox">
                                <div class="form-check">
                                  <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" name="" id="" value="UncheckedValue" required/>
                                    Remember me
                                  </label>
                                </div>
                            </div>
                            <div className='fgt-pwd'>Forgot password?</div>
                        </div>

                        <div className='btn-login' disabled={loading} onClick={handleLogin}>{loading ? "Processing" : "login"}</div>

                        <div className='create_acc'>Don't have an account? <span className='create_log' onClick={() => navigate("/register")}>Create an Account </span>
                        
                        </div>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login
