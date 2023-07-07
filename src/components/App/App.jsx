import {useEffect, useState} from 'react'
import axios from 'axios'
import React from 'react';
import GalleryList from './GalleryList/GalleryList'
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

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
