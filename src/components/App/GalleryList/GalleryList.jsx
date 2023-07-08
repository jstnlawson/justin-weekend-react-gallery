import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({picGallery, fetchGallery}) {
    return (
        <>
        {picGallery.map((picGallery) => {
            return (
            <GalleryItem key={picGallery.id} picGallery={picGallery} fetchGallery={fetchGallery}/>
            )
        })}
        </>
    )
}

export default GalleryList