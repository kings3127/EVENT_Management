import {useState} from 'react';
function DemoError()
{
    const [list,setList] = useState(['School','college','company','Faculties','students'])
    return(
        <div>
            <ul>
                {
                    list.map((item,i)=>(
                        <li key={i}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default DemoError; 