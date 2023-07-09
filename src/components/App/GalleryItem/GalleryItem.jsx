import axios from 'axios'
import { useState } from 'react';
import './GalleryItem.css'

function GalleryItem({picGallery, fetchGallery}) {
    // const [isImageClicked, setImageClicked] = useState(false);
    const [isHovered, setIsHovered] = useState(false)



    const clickGallery = () => {
        axios.put(`/gallery/like/${picGallery.id}`)
       .then(response =>{
        fetchGallery()
    }).catch(error => {
        console.log('error with click gallery: ', error);
    })
}

// const toggleContent = () => {
//     setImageClicked(!isImageClicked);
//   }

//   const handleClickDescription = () => {
//     if (isImageClicked) {
//       toggleContent();
//     }
//   }

const handleHover = () => {
    setIsHovered(true);
  }

  const handleHoverExit = () => {
    setIsHovered(false);
  }

    return (
        <>
        <div className="post-box">
            {/* <div className="image-box">
                {isImageClicked ? (
                <p onClick={handleClickDescription}>{picGallery.description}</p>) : (
                <img src={picGallery.path} onClick={toggleContent} className="post-image"/>)}
            </div> */}
            <div className="image-box" onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
                <img src={picGallery.path} className="post-image" alt="Gallery Picture/Desscription"/>
                {isHovered && (<div className="description-fade">{picGallery.description}
            </div>
            )}
      </div>
            <button onClick={clickGallery} className="like-button">🖤</button>
            <p className="like-text">{picGallery.likes} likes</p>
        </div>
        </>
    )
}
export default GalleryItem