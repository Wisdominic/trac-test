import { database } from "./firebase";

export const getuser = (id , cd) => {
    const ref = database.doc(`users/${id}`);
    ref.onSnapshot((queryproduct) => {
      const user = queryproduct.data();
     cd(user);
    });
  };

  export const getbg = (cd) => {
    const ref = database.doc(`gb/4dt3VE6DhYC4FTvQFOiW`);
    ref.onSnapshot((queryproduct) => {
      const user = queryproduct.data();
     cd(user);
    });
  };
  
//   export const getBg = (cd)=>{
//     const result = window.localStorage.getItem("bg")
//     console.log("User identified")
//     console.log(result);
//     cd(result)
//   }
  