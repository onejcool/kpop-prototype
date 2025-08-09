import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import ArtistSelector from "./components/ArtistSelector";
import NewsList from "./components/NewsList";
import Quiz from "./components/Quiz";
import Profile from "./components/Profile";
import Concerts from "./components/Concerts";

export default function App(){
  const [user, setUser] = useState(null); // {uid, displayName, photoURL}
  const [selectedArtist, setSelectedArtist] = useState(null);

  useEffect(()=>{
    // restore selected artist from localStorage
    const sa = localStorage.getItem("selectedArtist");
    if(sa) setSelectedArtist(JSON.parse(sa));
  },[]);

  useEffect(()=>{
    if(selectedArtist) localStorage.setItem("selectedArtist", JSON.stringify(selectedArtist));
  },[selectedArtist]);

  return (
    <div className="app">
      <header>
        <h1>K-POP Hub — Prototype</h1>
        <Login user={user} setUser={setUser} />
      </header>

      <main>
        <section className="left">
          <ArtistSelector onSelect={setSelectedArtist} selected={selectedArtist} />
          <NewsList artist={selectedArtist} />
          <Concerts artist={selectedArtist} />
        </section>

        <aside className="right">
          <Quiz user={user} />
          <Profile user={user} setUser={setUser} />
        </aside>
      </main>

      <footer>
        <small>Prototype — replace API keys and endpoints before production.</small>
      </footer>
    </div>
  );
}
