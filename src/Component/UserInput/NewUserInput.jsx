import React from "react";
 import UserInput from "./UserInput";
import style from "./NewUserInput.module.css"
const NewUserInput=(props)=>{
const InputDataHandler=(FormValue)=>{
const formData={
    ...FormValue,
    id:Math.random().toString()
}
props.onUserDataHandler(formData)
}

    return(
        <div className={style.NewUser}>
            <UserInput onInputDataHandler={InputDataHandler}/>
        </div>
    )
}

export default NewUserInput
