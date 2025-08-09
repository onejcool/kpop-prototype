import React from "react";

/*
  For prototype we include a static artist list. In production,
  consider loading a larger list from a database or an artists API.
*/
const ARTISTS = [
  { id: "bts", name: "BTS", instagram: "https://www.instagram.com/bts.bighitofficial/", twitter: "https://twitter.com/BTS_twt", youtube: "https://www.youtube.com/@BANGTANTV" },
  { id: "blackpink", name: "BLACKPINK", instagram: "https://www.instagram.com/blackpinkofficial/", twitter: "https://twitter.com/BLACKPINK", youtube: "https://www.youtube.com/@BLACKPINKOFFICIAL" },
  { id: "twice", name: "TWICE", instagram: "https://www.instagram.com/jypetwice/", twitter: "https://twitter.com/JYPETWICE", youtube: "https://www.youtube.com/@JYPETWICE" },
  { id: "txt", name: "TOMORROW X TOGETHER", instagram: "https://www.instagram.com/txt_bighit/", twitter: "", youtube: "https://www.youtube.com/@TXT" }
];

export default function ArtistSelector({onSelect, selected}){
  return (
    <section>
      <h2>아티스트 선택</h2>
      <div className="artist-list">
        {ARTISTS.map(a=>(
          <div key={a.id} className={"artist-card "+(selected?.id===a.id?'selected':'')} onClick={()=>onSelect(a)}>
            <strong>{a.name}</strong>
            <div style={{fontSize:12,color:'#666'}}>{a.instagram ? 'Instagram • ' : ''}{a.youtube ? 'YouTube' : ''}</div>
          </div>
        ))}
      </div>
      <div style={{marginTop:12}}>
        {selected ? (
          <div>
            선택됨: <strong>{selected.name}</strong><br/>
            SNS: {selected.instagram && <a href={selected.instagram} target="_blank" rel="noreferrer">Instagram</a>} {selected.twitter && " • "}{selected.twitter && <a href={selected.twitter} target="_blank" rel="noreferrer">Twitter</a>} {selected.youtube && " • "}{selected.youtube && <a href={selected.youtube} target="_blank" rel="noreferrer">YouTube</a>}
          </div>
        ): <em>아티스트를 선택하면 최신 뉴스와 콘서트 정보가 표시됩니다.</em>}
      </div>
    </section>
  );
}
