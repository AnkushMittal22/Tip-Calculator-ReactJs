import React from "react"
import ShowData from "./ShowData"
import style from "./NewShowData.module.css"
const NewShowData = (props) => {
  return (
    <div className={style.NewShowData}>
      <div className={style.NewShowData_customer}> <h1>Customer List</h1>
      </div>

      <div className={style.NewShowData_hr}><hr /></div>
      {props.items.map((tipExpense) => {
        return (<ShowData
          name={tipExpense.name}
          key={tipExpense.id}
          title={tipExpense.title}
          tip={tipExpense.tip}
          rupees={tipExpense.rupees}
        />)
      })}
    </div>
  )
}

export default NewShowData