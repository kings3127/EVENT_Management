import axios from "axios";
import { useState, useEffect } from "react";
export default function Fetching() {
  const [array, setArray] = useState();
  useEffect(() => {
    axios
      .get(" http://localhost:3001/posts", array)
      .then((response) => {
        setArray(response.data);
      })
      .catch((error) => {
        console.error("error");
      });
  }, []);
  return (
    <>
      <h1>Books</h1>
      <ul>
        {array &&
          array.map((item) => {
            <li key={item.id}>
              {item.title} {item.author}
            </li>;
          })}
      </ul>
    </>
  );
}