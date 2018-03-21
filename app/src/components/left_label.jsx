import React from 'react'

export default function(text, required = false){
  return(
    <div style={{textAlign:'left'}}>
      <label style={{textColor:'#000'}}>{text}</label>
      {required && <span style={{color:"#f02b2b", marginLeft:"3px"}}>*</span>}
    </div>
  )
}
