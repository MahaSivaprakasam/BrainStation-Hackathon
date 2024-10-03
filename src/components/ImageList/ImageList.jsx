import "./ImageList.scss";
import ImageItem from "../ImageItem/ImageItem";

export default function ImageList({imageURLs, setSelectedImage}){

    let imageArr = imageURLs;

    return(
        <div className="image-list__wrapper">
            <h2 className="image-list__section-title">Select an Image to Begin</h2>
       
            <div className="image-list">            
            {
                    imageArr.map((image)=> (
                        <div onClick={ ()=> {setSelectedImage(image.url)}} key={image.id}>
                            <ImageItem 
                            url={image.url}
                            key={image.id} />
                        </div>
                    )

                    )
                }
            
                

            </div>
        </div>
        
    )
}