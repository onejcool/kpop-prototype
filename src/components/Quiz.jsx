import React, { useEffect, useState } from "react";

/*
  Simple local quiz engine.
  - Questions are embedded in the prototype. In production, store questions in DB.
  - Points stored in localStorage per user (by uid) or globally for demo.
*/

const QUESTIONS = [
  { id:1, q:"BTS의 데뷔 연도는?", options:["2010","2011","2013","2015"], answer:2 }, // index 2 => 2013
  { id:2, q:"BLACKPINK 소속사는?", options:["SM","YG","JYP","BigHit"], answer:1 }
];

export default function Quiz({user}){
  const uid = user ? user.uid : "guest";
  const [index,setIndex] = useState(0);
  const [selected,setSelected] = useState(null);
  const [points,setPoints] = useState(0);

  useEffect(()=>{
    const saved = localStorage.getItem(`kpop_points_${uid}`);
    if(saved) setPoints(parseInt(saved,10));
  },[uid]);

  function submit(){
    if(selected===null) return;
    const correct = (selected === QUESTIONS[index].answer);
    const gained = correct ? 10 : 0;
    const newPoints = points + gained;
    setPoints(newPoints);
    localStorage.setItem(`kpop_points_${uid}`, newPoints);
    alert(correct ? `정답! +${gained}포인트` : "틀렸습니다.");
    setSelected(null);
    setIndex((index+1) % QUESTIONS.length);
  }

  return (
    <section>
      <h3>K-POP 트리비아</h3>
      <div>플레이어: {user ? user.displayName : "게스트"} • 포인트: {points}</div>
      <hr/>
      <div><strong>{QUESTIONS[index].q}</strong></div>
      <div>
        {QUESTIONS[index].options.map((o,i)=>(
          <label key={i} className="quiz-option">
            <input type="radio" name="opt" checked={selected===i} onChange={()=>setSelected(i)} /> {o}
          </label>
        ))}
      </div>
      <div style={{marginTop:8}}>
        <button onClick={submit}>제출</button>
      </div>
    </section>
  );
}
