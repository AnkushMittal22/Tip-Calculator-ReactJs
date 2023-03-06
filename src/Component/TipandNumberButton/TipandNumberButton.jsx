import React,{useState} from "react"
import style from "./TipandNumberButton.module.css"
const TipandNumbreButton=(props)=>{

    const [EnteredPerson,setEnteredPerson]=useState(0)
    const [EnteredTip,setEnteredTip]=useState(0)

    

    let tipValue = props.value.map((expense)=>{
        return(expense.tip)
        
    }).reduce((previous, current)=>{
return previous+current
    },0)


console.log(tipValue);



    const SubmitHandler=(event)=>{
event.preventDefault()
// setEnteredTip(()=>{
//     tipValue =props.value.map((expense)=>{
//         return(expense.tip) 
//     })
//     return tipValue
// })
setEnteredPerson(props.value.length)
setEnteredTip( tipValue)
    }

    return(
<div className={style.tipandPerson}>
<div className={style.tipandPerson_button}>
   <button type="submit" onClick={SubmitHandler}>Calculate Tip & Customer</button>
   </div>
   <table>
   <tbody>
  <tr>
    <th>Total Customer</th>
    <th>Tip</th>
    
  </tr>
  <tr>
    <td>{EnteredPerson}</td>
    <td>{EnteredTip}</td>
  </tr>
 
  </tbody>
</table>
 <p className={style.tipandPerson_p}>@2023 TIP.CALCULATOR</p> 

</div>
    )
}

export default TipandNumbreButton
