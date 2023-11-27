import React,{useContext} from "react";
import { MyContext } from "./ContectParent";
export default function ChildComponent()
{
    const Context=useContext(MyContext)
    return(
        <div>
            <h2>
                {Context}
                
                </h2>
        </div>
    )
}