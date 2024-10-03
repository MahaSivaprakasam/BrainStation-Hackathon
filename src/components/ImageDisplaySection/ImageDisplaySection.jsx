import axios from 'axios';
import {useEffect, useState} from 'react';
import {saveAs} from 'file-saver';
import "./ImageDisplaySection.scss";

    
export default function ImageDisplaySection({query,color}){
    const API_KEY='QyWFtO1Wtd52odix0akRPtAJFVFT5l6uKpAkGjS6o5ohxaG0mXYkuU2F';
    const API_URL='https://api.pexels.com/v1/search';
    const [images,setImages]=useState([]);
    

    useEffect(()=>
        {
        const getImages= async ()=>
            {
                if (!query) return;
                try{
                    const url=`${API_URL}?query=${query}&color=${color}&per_page=4`;
                    const response=await axios.get(url, {
                        headers:{
                            Authorization:API_KEY,
                        },
                    });
                    setImages(response.data.photos);
                }catch(error){
                    console.error('Error fetching images:',error);
                }
        };
        getImages();
    }, [query, color]);


//Share functionality
    const shareImage = (image) => {
        if (navigator.share) {
            navigator.share({
                title: image.alt,
                url: image.url,
            })
            .then(() => console.log('Image shared successfully'))
            .catch((error) => console.error('Error sharing image:', error));
        } else {
            alert(`Share this image: ${image.url}`);
        }
    };

    // Download functionality
    const downloadImage = (image) => {
        saveAs(image.src.original, `${image.alt}.jpg`);
    };

    if(images.length===0){
        return(
            <div>
                <div>No images found</div>
            </div>
        );
    }

    return(
        <section className='display-images'>
            {images.slice(0, 4).map(image=>{
                return(
                    <div key={image.id} className='display-images__item'>
                        <img src={image.src.medium} alt={image.alt} className='display-images__img' />
                        <p  className='display-images__text'>Photographer: {image.photographer}</p>
                        <div className='display-images__button'>
                        <button onClick={() =>shareImage(image)} className='display-images__share'>Share</button>
                        <button onClick={() => downloadImage(image)} className='display-images__download'>Download</button>
                        </div>
                        </div>
                );
            })}
        </section>
    )
}
