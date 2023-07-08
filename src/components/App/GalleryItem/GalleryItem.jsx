import axios from 'axios'

function GalleryItem({picGallery, fetchGallery}) {


    const clickGallery = () => {
        axios.put(`/gallery/like/${picGallery.id}`)
       .then(response =>{
        fetchGallery()
    }).catch(error => {
        console.log('error with click gallery: ', error);
    })
}

    return (
        <div>
            <img src={picGallery.path}/>
            <p>{picGallery.description}</p>
            <button onClick={clickGallery}>likes:{picGallery.likes}</button>
        </div>
    )
}
export default GalleryItem