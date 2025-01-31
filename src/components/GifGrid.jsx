import { getGifs } from "../helpers/getGifs";
import { useState, useEffect } from "react";
import { GitItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs( category);
    setImages(newImages);
  }
  useEffect( () => {
    getImages();
  }, [ ])

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {
          images.map( ({id, title}) => (
            <GitItem />
          ))
        }
      </ol>
    </>
  );
};
