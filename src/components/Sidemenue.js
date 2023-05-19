import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaRegBell,


} from "react-icons/fa";
import { MdTransferWithinAStation, MdOutlineBusinessCenter, MdSupportAgent, MdOutlineQueryStats } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai"
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidemenu.css";
import { useAuth } from "../service/Theme";



const Sidebar = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const {loginuser} =  useAuth()


  const menuItem = [
    {
      path: `/`,
      name: "Overview",
      icon: <FaTh />,
    },
    {
      path: "/appointment",
      name: "Appointments",
      icon: <MdTransferWithinAStation />,
    },
    {
      path: "/login",
      name: "Login",
      icon: <MdOutlineQueryStats />,
    },
    {
      path: "/pathology/log",
      name: "Pathology",
      icon: <MdOutlineBusinessCenter />,
    },
    {
      path: "/chats/log",
      name: "Chats",
      icon: <MdSupportAgent />,
    },


    {
      path: "/setting",
      name: "Settings",
      icon: <AiOutlineSetting />,
    },

    {
      path: "/logout",
      name: "Logout",
      icon: <FiLogOut />,
    },
  ];

  return (
    <>

      <div className="containersss" onClick={toggle}>
        <div
          style={{ width: isOpen ? "200px" : "50px", zIndex: isOpen ? 3 : 0 }}
          className="sidebaradmin"
        >
          <div className="top_section11">
            <h1
              style={{ display: isOpen ? "block" : "none" }}
              className="logo1"
            >
              <img src="/img/v1.png" alt="" />
            </h1>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <div
          style={{ width: isOpen ? "200px" : "0px", zIndex: isOpen ? 3 : 0 }}
          className="sidebaradmindis"
        >
          <div className="top_section11">
            <h1
              style={{ display: isOpen ? "block" : "none" }}
              className="logo1"
            >
              <img src="/img/v1.png" alt="" />
            </h1>
            <div
              style={{ marginLeft: isOpen ? "0px" : "0px" }}
              className="barsmobile"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              activeclassName="active"
              className="link" style={{ display: isOpen ? "flex" : "none" }}
            >
              <div className="icon" style={{ display: isOpen ? "block" : "none" }}>{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>


        <main>{children}</main>

        <div className="sidtopbajsjd">
          <div className="tocontaone">


            <div className="search">
              <form onsubmit="event.preventDefault();" role="search" className="Still-search">
                <label for="search">Search for stuff</label>
                <input id="search" type="search" placeholder="Search..." autofocus required />
                <button type="submit">Go</button>
              </form>
            </div>

            <div className="notify-class"> 
              <div className="bell">
                <div className="bell-icon">
                  <FaRegBell />
                </div>
                <div className="line-class">
                  &#x2758;
                </div>
              </div>

              <div className="logBtn">
                {loginuser.length !== 0? loginuser.email : <button onClick={() => navigate("/login")} className="btn-login">Login</button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

