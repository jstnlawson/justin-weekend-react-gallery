import axios from 'axios'
import { useState } from 'react';

function GalleryItem({picGallery, fetchGallery}) {
    const [isImageClicked, setImageClicked] = useState(false);



    const clickGallery = () => {
        axios.put(`/gallery/like/${picGallery.id}`)
       .then(response =>{
        fetchGallery()
    }).catch(error => {
        console.log('error with click gallery: ', error);
    })
}

const toggleContent = () => {
    setImageClicked(!isImageClicked);
  }

  const handleClickDescription = () => {
    if (isImageClicked) {
      toggleContent();
    }
  }

    return (
        <div>
            {/* <img src={picGallery.path}/>
            <p>{picGallery.description}</p> */}
            {isImageClicked ? (
            <p onClick={handleClickDescription}>{picGallery.description}</p>) : (
            <img src={picGallery.path} onClick={toggleContent} />
            )}
            <button onClick={clickGallery}>likes:{picGallery.likes}</button>
        </div>
    )
}
export default GalleryItem