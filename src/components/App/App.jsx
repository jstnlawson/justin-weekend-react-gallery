import {useEffect, useState} from 'react'
import axios from 'axios'
import React from 'react';
import GalleryList from './GalleryList/GalleryList'
import GalleryForm from './GalleryForm/GalleryForm'
import './App.css';

function App() {

  const [picGallery, setPicGallery] = useState([])

  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response) => {
      console.log('Entire response:', response);
        // The actual array comes from the data attribute on the response
        console.log('Just the data:', response.data);
        setPicGallery(response.data)
    })
    .catch(function (error) {
      console.log('error on GET:', error)
    })
  }

  useEffect( () => {
    fetchGallery();
  }, [])

  const addPost = (newImagePath, newImageDescription, ) => {
    axios({
      method: 'POST',
      url: '/gallery',
      data: {
        path: newImagePath,
        description: newImageDescription, 
        likes: 0
      }
    })
      .then( (response) => {
        console.log('Response:', response);
        fetchGallery();
      })
      .catch(function (error) {
        console.log('Error on add:', error);
      });
  }

    return (
      <div className="App">
        <GalleryForm addPost={addPost}/>
        <GalleryList fetchGallery={fetchGallery} picGallery={picGallery}/>

      </div>
    );
}

export default App;
