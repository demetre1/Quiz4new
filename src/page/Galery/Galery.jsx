import React from "react";

export default function Galery({texts}) {
   return(<div className="conteiner">
   
  {texts.map((e)=>(<div className="card">
    <img src={e.url}/>
    <p>{e.title} </p></div>))}
   </div>
   )
}
