import React from "react";
import { useState } from "react";
function MyFunctionComponent()
{
    const [count, setcount] = useState(0)
    function changeCount()
    {
        setcount(count+1)
    }
    function changeCount1()
    {
        if(count>0)
        setcount(count-1)
    }
    return (
        <div>
           <h1>Count:{count}</h1>
           <button onClick={changeCount}>Increase</button>
           <button onClick={changeCount1}>Decrease</button>
        </div>
    )
}
export default MyFunctionComponent;