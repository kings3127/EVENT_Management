import React from "react";
import ChildComponent from "./ContextChild";
export const  MyContext=React.createContext()
export default function ParentComponent()
{
    return(
        <MyContext.Provider value="Hello World">
            <ChildComponent/>
        </MyContext.Provider>
    )
}