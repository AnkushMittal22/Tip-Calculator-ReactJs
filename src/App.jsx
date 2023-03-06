import React, { useState } from "react"

import Heading from "./Component/Heading/Heading";
import NewUserInput from "./Component/UserInput/NewUserInput";
import NewShowData from "./Component/ShowData/NewShowData";
import TipandNumbreButton from "./Component/TipandNumberButton/TipandNumberButton";

const Dummy_Data = [

]
function App() {
  const [TipData, setTipData] = useState(Dummy_Data)

  const UserDataHandler = (userData) => {
    setTipData((previous) => {
      return [userData, ...previous]
    })
  }

  return (
    <div >

      <Heading />
      <NewUserInput onUserDataHandler={UserDataHandler} />
      <NewShowData items={TipData} />
      <TipandNumbreButton value={TipData} />
    </div>
  );
}

export default App;