import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
const DataFetch = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const apiurl = " http://localhost:3001/posts";
        axios.get(apiurl)
            .then((response) => { setData(response.data) })
            .catch((error) => {
                console.error("Error Fetching Data", error);
            })
    }, []);
    return (
        <div>
            <h1>Backend Data</h1>
            <ul>

                {data.map((post) => (

                    <li key={post.id}>{post.title}-{post.author}</li>
                ))}

            </ul>
        </div>
    )
}
export default DataFetch;