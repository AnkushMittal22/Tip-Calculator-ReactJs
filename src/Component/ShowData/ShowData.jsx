import React from "react"
import style from "./ShowData.module.css"
const ShowData = (props) => {
  return (
    <div className={style.showData}>
      <ul>
        <li>{`${props.name} ${props.title} ${props.tip} ${props.rupees} `}</li>
      </ul>



    </div>
  )
}

export default ShowData