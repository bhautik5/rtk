import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "../counterSlice"

const Counter = () => {
    const counter = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()
  return (
    <div style={{display:"flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
        <button
        aria-label="Increment Value" 
        onClick={()=>{return dispatch(increment())}}>Increment</button>
        {counter}
        <button
        aria-label="Decrement value"
        onClick={()=>dispatch(decrement())}
        >Decrement</button>
    </div>
  )
}

export default Counter