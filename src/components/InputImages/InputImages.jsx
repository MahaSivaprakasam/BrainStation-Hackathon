import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./InputImages.scss";
import ImageList from "../ImageList/ImageList";
import { imageURLs } from "../../utils/images";
import { API_KEY, API_URL, API_PW } from "../../utils/API";


const InputImage = () => {

  let def = imageURLs[0].url;
  console.log(def);
  const [selectedImage, setSelectedImage] = useState(def);
  const [isLoading, setIsLoading] = useState(true);
  const [colors, setColors] = useState([]);

  async function getColors(selectedImage){
    try{
      const {data} = await axios.get(`${API_URL}${selectedImage}`, {
        auth: {
          username: `${API_KEY}`,
          password: `${API_PW}`
        }
      });
      console.log(data.result.colors.image_colors[0].html_code);
      setColors(data.result.colors.image_colors[0].html_code)
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=> {
    getColors(selectedImage);
  }, [selectedImage]
  )


  // if (isLoading){
  //   return <h2>Content is Loading</h2>
  // }

  return (
    <div>
      <h1>Color Extractor</h1>
      <ImageList imageURLs={imageURLs} setSelectedImage={setSelectedImage}/>
      <h3>The primary color is: {colors}</h3>

    </div>
  );
};
export default InputImage;