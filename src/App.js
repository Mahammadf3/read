import {useState} from "react"

import "./App.css"
const text="Cricket is a team sport played between two teams of eleven players each. It is a bat-and-ball game played on a roughly oval grass field, in the centre of which is a flat strip of ground 20.12 m (22 yards) long, called a pitch. At each end of the pitch is a set of wooden stumps, called a wicket"
const App=()=>{
  const[name,setBool]=useState(true)

  const change=()=>{
    setBool(prevState=>!prevState)
  }

return(
  <div className="container">
    <img src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png" alt="logo" className="h"/>
    {name?<p>{text.slice(0,30)}</p>:<p>{text}</p>}
    <button type="button"onClick={change}>
      {name?"ReadMore":"ReadLess"}
    </button>
  </div>
)
}
export default App