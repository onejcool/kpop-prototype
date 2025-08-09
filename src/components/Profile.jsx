import React, { useEffect, useState } from "react";

/*
  Profile component:
  - Allows changing display name and profile picture (saved to localStorage for prototype).
  - In production, store profile data in Firestore/Storage tied to authenticated user.
*/

export default function Profile({user, setUser}){
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  useEffect(()=>{
    setName(user?.displayName || "");
    setPhoto(user?.photoURL || "");
  },[user]);

  function uploadPhoto(e){
    const f = e.target.files?.[0];
    if(!f) return;
    const reader = new FileReader();
    reader.onload = ev=>{
      setPhoto(ev.target.result);
    };
    reader.readAsDataURL(f);
  }

  function save(){
    const updated = { ...(user||{}), displayName: name, photoURL: photo };
    setUser(updated);
    localStorage.setItem("kpop_user", JSON.stringify(updated));
    alert("프로필 저장됨.");
  }

  return (
    <section>
      <h3>마이 페이지</h3>
      {user ? (
        <div>
          <img src={photo||'https://via.placeholder.com/72'} alt="profile" className="profile-pic" />
          <div>
            <label>이름<br/><input value={name} onChange={e=>setName(e.target.value)} /></label>
          </div>
          <div>
            <label>프로필 사진 업로드<br/><input type="file" accept="image/*" onChange={uploadPhoto} /></label>
          </div>
          <div style={{marginTop:8}}>
            <button onClick={save}>저장</button>
          </div>
        </div>
      ) : <div>로그인 후 프로필을 편집하세요.</div>}
    </section>
  );
}
