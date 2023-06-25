import React from 'react'
import './box.css'

export const Box = ({value, onClick}) => {

    //assign color based on value
    const style = value === "X" ? "box x" : "box o"
  return (
      <button className={style} onClick={onClick}>{value}</button>
      
  )
}

