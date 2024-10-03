import axios from 'axios';
import {useEffect, useState} from 'react';
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

    if(images.length===0){
        return(
            <div>
                <div>No images found</div>
            </div>
        );
    }

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
    return(
        <div>
            {images.slice(0, 4).map(image=>{
                return(
                    <div key={image.id} className='image-Display__item'>
                        <img src={image.src.medium} alt={image.alt} />
                        <p>Photographer: {image.photographer}</p>
                        <button onClick={() =>shareImage(image)}>Share</button>
                        </div>
                );
            })}
        </div>
    )
}
