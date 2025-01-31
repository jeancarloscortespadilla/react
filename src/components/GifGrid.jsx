import { getGifs } from "../helpers/getGifs";
import {useState  } from "react";

export const GifGrid = ({category}) => {

  const [counter, setcounter] = useState(10);
  getGifs(category);
  return (
    <>
      <h3>{category}</h3>
      <h5>{counter}</h5>
    </>
  )
}

  

