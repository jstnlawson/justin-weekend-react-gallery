import { useState } from 'react';
import './GalleryForm.css'

function GalleryForm({ addPost }) {
    const [newImagePath, setNewImagePath] = useState('');
    const [newImageDescription, setNewImageDescription] = useState('');
    const [showCreateButton, setShowCreateButton] = useState(true);
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Trigger POST request
        addPost(newImagePath, newImageDescription);

        // Clear inputs
        setNewImagePath('');
        setNewImageDescription('');
        //create/post buttons (hide form until create is clicked)
        setShowForm(false);
    }

    const handleCreateClick = () => {
        setShowCreateButton(false);
        setShowForm(true);
      };

    //   on click of "⨁" button, handleCreateClick function updates the state 
    //   of showCreateButton and showForm to control the visibility of the 
    //   button and the form by setting showCreateButton 
    //   to false and showForm to true

      return (
        <>
          <div className='form-container'>
            {/* is showForm false? (it's set to false untill button is clicked)If so display this button */}
            {!showForm && (
              <button className='create-button' onClick={handleCreateClick}><span className='plus-symbol'>⨁</span><br></br>create</button>
            )}
            {/*if showForm is true (button clicked) then create button is hidden and the form is shown */}
            {showForm && (
              <form onSubmit={handleSubmit}>
                {/* <label>Image:</label> */}
                <textarea onChange={(event) => setNewImagePath(event.target.value)}value={newImagePath} placeholder='Enter image URL here!'/>
                {/* <label>Description:</label> */}
                <textarea onChange={(event) => setNewImageDescription(event.target.value)}value={newImageDescription} placeholder='Describe your photo in 200 characters or less!'/>
                <button className='submit-button'  type="submit">Show the world your creation!</button>
              </form>
            )}
          </div>
        </>
      );

    // return (
    //     <>
    //     <div className='form-container'>
    //         <button className='create-button'>create ⨁</button>
    //         <form onSubmit={handleSubmit}>
    //             <label>Image Url:</label>
    //             <input
    //                 onChange={(event) => setNewImagePath(event.target.value)}
    //                 value={newImagePath}
    //             />
    //             <label>Description:</label>
    //             <input
    //                 onChange={(event) => setNewImageDescription(event.target.value)}
    //                 value={newImageDescription} />
    //             <button type="submit">post it!</button>
    //         </form>
    //     </div>
    //     </>
    // )
}

export default GalleryForm;