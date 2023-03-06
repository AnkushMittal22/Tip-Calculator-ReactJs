import React from "react"
import style from "./Heading.module.css"
const Heading = () => {
  return (
    <div className={style.heading}>
      <h1 className={style.heading_h1}>Tip Calculator</h1>
      <p>Built in React</p>
    </div>
  )
}

export default Heading 