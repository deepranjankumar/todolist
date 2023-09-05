import React from "react";

import { useState } from "react";
import './index.css'
import ToDolists from "./ToDolists";

const App=()=>{
const [text,setText]=useState();
const [final,setfinal]=useState([]);
  const ClickEvent=(event)=>{
    setText(event.target.value);
  }
  const findText=()=>{
    if(text!==""){
  setfinal((olddata)=>{
    return([...olddata,text]);
  });
}
  setText("");
  }
// 
  const ItemDelete=(id)=>{  // ye id vahi hai props.id se aaya hai ToDolists.jsx se
    console.log("deleted");
    setfinal((olddata)=>{
   return (olddata.filter((arr,ind)=>{
  return (ind!==id)
   }))
    })
  }
  return(<>
    <div className="container">
      <div className="box">
        <h1 className="heading">ToDo List</h1>
        <div className="link">
          <input type="text" placeholder="add a items"
           value={text}  //whatever thing we write all the thing reflect in value 
           onChange={ClickEvent}/>
         <button onClick={findText}>+</button>
        </div>
        <ol>
        {final.map((data,ind)=>{
         return( <ToDolists
          text={data}
          key={ind}
          id={ind}
          onSelect={ItemDelete}
         />)
        })}
        </ol>
      </div>
    </div>
  </>)
}
export default App