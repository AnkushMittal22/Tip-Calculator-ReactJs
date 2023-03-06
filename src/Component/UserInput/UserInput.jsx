import React, { useState } from "react"
import style from "./UserInput.module.css"
const UserInput = (props) => {

  const [EnteredAmount, setEnteredAmount] = useState("")
  const [EnteredService, setEnteredService] = useState("")
  const [EnteredName, setEnteredName] = useState("")

  const AddAmountHandler = (event) => {
    setEnteredAmount(event.target.value)
  }

  const AddServiceHandler = (event) => {
    setEnteredService(event.target.value)
  }
  const AddNameHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const SubmitHandler = (event) => {
    event.preventDefault()
    const Input = {
      name: EnteredName,

      tip: EnteredAmount * EnteredService,
      title: "offering a tip of",
      rupees: "rupees",
    }

    props.onInputDataHandler(Input)

    setEnteredAmount("")
    setEnteredName("")
    setEnteredService("")
  }

  return (
    <form onSubmit={SubmitHandler} >
      <div className={style.userInput_amount}>
        <label htmlFor="amount">Enter yur bill amount</label>
        <input value={EnteredAmount} onChange={AddAmountHandler} type="number" id="amount" placeholder="Enter Bill Amount" />
      </div>
      <div className={style.userInput_hr}> <hr /></div>

      <div className={style.userInput_service}>
        <label htmlFor="">How was the servie</label>
        <select value={EnteredService} onChange={AddServiceHandler} >
          <option value="">Choose</option>
          <option value="0.50">Very Very Happy 50%</option>
          <option value="0.40">Very Happy 40%</option>
          <option value="0.30">Happy 30%</option>
          <option value="0.20">Good 20%</option>
          <option value="0.10">Ok 10%</option>
        </select>
        <label htmlFor="">Customer Name</label>
        <input value={EnteredName} onChange={AddNameHandler} type="text" placeholder="Customer Name" />
        <button type="submit" >Add Customer</button>


      </div>
    </form>
  )
}

export default UserInput