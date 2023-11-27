import React from "react";
import { useState } from "react";
function DynamicRendering()
{
    const[isValid,setVal]=useState(true)
    if(isValid)
        return (
            <div>
                <h2>Yes</h2>
                <button onClick={() => setVal(false)}>Click</button>
                </div>

        )
        else
        return (
        <div>
            <h2>No</h2>
            <button onClick={() => setVal(true)}>Click</button>

        </div>
                )
}

export default DynamicRendering;