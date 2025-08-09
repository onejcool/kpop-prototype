import React, { useEffect, useState } from "react";

/*
  News fetching:
  - This component attempts to fetch news from NewsAPI.org or other news endpoints.
  - Replace NEWS_API_KEY with your key or implement a server-side proxy to avoid exposing keys.
  - For the prototype, if network fetch fails, it falls back to mock data.
*/

const NEWS_API_KEY = "YOUR_NEWSAPI_OR_BING_KEY";
export default function NewsList({artist}){
  const [articles, setArticles] = useState([]);
  useEffect(()=>{
    if(!artist) { setArticles([]); return; }
    const q = encodeURIComponent(artist.name + " K-POP");
    // NewsAPI example (requires key). You should create a server-side proxy in production.
    const url = `https://newsapi.org/v2/everything?q=${q}&pageSize=6&apiKey=${NEWS_API_KEY}`;
    fetch(url).then(r=>{
      if(!r.ok) throw new Error("Network response not ok");
      return r.json();
    }).then(data=>{
      if(data && data.articles) setArticles(data.articles);
    }).catch(err=>{
      console.warn("News fetch failed, using mock data", err);
      // mock fallback
      setArticles([
        { title: `${artist.name} releases new single (mock)`, description: "This is mock news for the prototype.", url: "#" },
        { title: `Interview with ${artist.name} (mock)`, description: "Mock interview excerpt.", url: "#" }
      ]);
    });
  },[artist]);

  return (
    <section>
      <h2>최신 뉴스</h2>
      {artist ? (
        <div>
          {articles.length===0 && <div>로딩 중...</div>}
          {articles.map((a,i)=>(
            <div key={i} className="news-item">
              <a href={a.url||'#'} target="_blank" rel="noreferrer"><strong>{a.title}</strong></a>
              <div style={{fontSize:13,color:'#666'}}>{a.description}</div>
            </div>
          ))}
        </div>
      ) : <div>아티스트를 선택하세요.</div>}
    </section>
  );
}
