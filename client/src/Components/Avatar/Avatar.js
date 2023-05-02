import React from 'react'

const Avatar = (props) => {
  const style={
    padding:`${props.py} ${props.px}`,
    backgroundColor: props.backgroundColor,
    borderRadius:props.radius,
    color: props.color || "black",
    fontSize : props.fontsize,
    textAlign : "center",
    cursor : props.cursor || null,
    border : props.border,
    marginLeft : props.marginLeft,
    marginTop : props.marginTop,
    fontWeight : 500,
   
  }
  return (
    <div style={style}>
      {props.character}
    </div>
  )
}

export default Avatar;
