import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {incNum, decNum} from "./actions"

const Counter = () => {

    const myState = useSelector((state) => state.changeNumber)
    const dispatch = useDispatch();

    return(
        <>
            <h1>Counter</h1>
            <button onClick={()=>dispatch(incNum())}>INC</button>
            <h1>{myState}</h1>
            <button onClick={()=>dispatch(decNum())}>DEC</button>
        </>
    )
}
export default Counter;