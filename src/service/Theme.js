import React, { useContext, useState, useEffect, createContext} from "react";
import { getuser } from "./getuser.service";
import { auth } from "../service/firebase";
// import { getuser, getuserwallet } from "./GetUser.service";



const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children}) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bg, setbg] =  useState("qwertyu")
  const [class_selected, setclass_selected] =  useState()

  const [loginuser, setloginuser] = useState([]);
//   const [userwallet, setuserwallet] = useState([]);

const getCurentThemeBackgrounf =()=>{
    const class_selected = window.localStorage.getItem("bg")
    setclass_selected(class_selected)
}
 

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
 
//   function resetPassword(email) {
//     return auth.sendPasswordResetEmail(email);
//   }

  auth.onAuthStateChanged((user) => {
    setCurrentUser(user);
  });

  function logout() {
   return auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {

      if (user){
        const id = user.uid;
        getuser(id, (e) => {
          setloginuser(e);
        });   
      } 
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, [currentUser]);


  const value = {
    currentUser : currentUser,
    loginuser,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
