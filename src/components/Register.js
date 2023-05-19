import { React, useEffect, useState, } from 'react';
import "./User.css";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getbg } from '../service/getuser.service';





function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [message, setmessage] = useState("")
    const [loading, setloading] = useState(false)

    const createNewUser = async (e) => {
        e.preventDefault()

        if (name === "" || email === "" || password === "") {
            setmessage("no value entered")
            return
        }

        if (password.length < 6){
            window.alert("password is less than 6 characters")
        }
        const data = {
            fullname: name,
            email,
            password
        }
        setloading(true)
        try {
            await axios.post(`https://us-central1-trac-trac-app.cloudfunctions.net/createNewUser/create-user`, {
                data
            }).then((res) => {
             
                if (res.data.messeage === "Account Created Successfully") {
                    window.alert(res.data.messeage +" " + "Please login")
                    navigate("/login")
                    return
                }
                window.alert("error try again")

            })
        } catch (error) {
            window.alert("error try again")
        }
        setloading(false)
    }

    const [bg, setbg]= useState("initial")

    useEffect(() => {
      getbg((res)=>{
        setbg(res.bg)
      })
    }, [])
    return (

        <div className={bg === "intails"  ? "mainLogin-white"  : "mainLogin"}>
            <div className="Login_container">
                <form action="">


                    <div className={bg === "intails"  ? "allcontainers2-white"  : "allcontainers2"} onClick={() => navigate("/")} >
                        <MdOutlineCancel />
                    </div>

                    <div className="center">

                        <div className="cancel_logo">
                            <img src="/img/apple.png" alt="" className='sys-logo' />
                        </div>

                        <center><h3>CREATE ACCOUNT</h3></center>

                        <div >
                            <label htmlFor="fName" className='label'>Name</label>
                            <div><input type="text" placeholder='Enter Your Name' id='fName' onChange={(event => {
                                setName(event.target.value)
                            })} className='log-input' />
                            </div>
                        </div>


                        <div >
                            <label htmlFor="email" className='label'>Email</label>
                            <div><input type="text" placeholder='Enter Your Email' id='email' className='log-input' onChange={(event => {
                                setEmail(event.target.value)
                            })} />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="pwd" className='label'>Password</label>
                            <div><input type="password" placeholder='Enter Your password' id='pwd' className='log-input' onChange={(event => {
                                setPassword(event.target.value)
                            })}></input></div>
                        </div>

                        <div className={bg === "intails"  ? "checker-white"  : "checker"}>
                            <div className="checkBox">
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" name="" id="" value="UncheckedValue" />
                                        I accept the <span className='create_log'>Terms and Condition</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        {message}
                        <div className='btn-login' disabled={loading} onClick={createNewUser}>{loading ? "Processing" : "Create Account"}</div>

                        <div className='create_acc'>Don't have an account? <span className='create_log' onClick={() => navigate("/login")}>Login </span>

                        </div>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default Register
