import React, { useEffect, useState } from "react";

/*
  Concerts:
  - This tries to fetch from Ticketmaster / Songkick APIs.
  - Use your own API keys; for prototype, the component falls back to mock events.
*/

export default function Concerts({artist}){
  const [events,setEvents] = useState([]);
  useEffect(()=>{
    if(!artist){ setEvents([]); return;}
    // Example Ticketmaster query (replace with your key and server-side proxy)
    const mock = [
      { date:"2025-09-12", city:"Seoul, South Korea", title:`${artist.name} World Tour (mock)` },
      { date:"2025-10-05", city:"Tokyo, Japan", title:`${artist.name} Fan Meeting (mock)` }
    ];
    // In production: fetch real data here
    setEvents(mock);
  },[artist]);

  return (
    <section>
      <h2>콘서트 일정</h2>
      {artist ? (
        <div>
          {events.map((e,i)=>(
            <div key={i} style={{padding:8,borderBottom:'1px dashed #eee'}}>
              <div><strong>{e.title}</strong></div>
              <div style={{fontSize:13,color:'#666'}}>{e.date} • {e.city}</div>
            </div>
          ))}
        </div>
      ) : <div>아티스트 선택 시 콘서트가 표시됩니다.</div>}
    </section>
  );
}
