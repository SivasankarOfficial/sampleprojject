import { useContext } from "react"
import {UserContext} from './App'



function Component4() {
    const user=useContext(UserContext)
  return (
    <div>

         <h5>component4</h5>
         <h1>{`${user}`}</h1>
         </div>
   
  )
}

export default Component4