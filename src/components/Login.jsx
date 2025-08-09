import React from "react";

/*
  NOTE:
  This component is a placeholder. For a working Google Login,
  follow the README steps to configure Firebase and replace this
  component with the Firebase Auth logic.
*/

export default function Login({user, setUser}){
  function demoSignIn(){
    const demo = { uid: "demo-123", displayName: "Demo User", photoURL: "" };
    setUser(demo);
    localStorage.setItem("kpop_user", JSON.stringify(demo));
  }
  function demoSignOut(){
    setUser(null);
    localStorage.removeItem("kpop_user");
  }

  React.useEffect(()=>{
    const saved = localStorage.getItem("kpop_user");
    if(saved && !user) setUser(JSON.parse(saved));
  },[]);

  return (
    <div>
      {user ? (
        <div>
          <img src={user.photoURL||'https://via.placeholder.com/48'} alt="me" style={{width:36,height:36,borderRadius:18,verticalAlign:'middle',marginRight:8}}/>
          <span>{user.displayName}</span>
          <button onClick={demoSignOut} style={{marginLeft:8}}>Sign out</button>
        </div>
      ):(
        <div>
          <button onClick={demoSignIn}>Sign in with Google (demo)</button>
        </div>
      )}
    </div>
  );
}
