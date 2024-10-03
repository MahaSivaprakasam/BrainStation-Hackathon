import "./ImageItem.scss"

export default function ImageItem({url}){
   
   return(
    <div className="image-list__item">
            <img src={url} className="image-list__thumbnail" />
        </div>
   )
}