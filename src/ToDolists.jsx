import React from 'react';
import './index.css';
const ToDolists=(props)=>{
    return(<>
    
    <div className="todo_style">
    <i className="fas fa-times" onClick={()=>{
        props.onSelect(props.id)  //ise yahi pata chalega ki kis wale ko delete karne ja raha hu 
    }}></i>
    <li>{props.text} </li>
    </div>
    </>
    )
}
export default ToDolists;