const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const query = 'UPDATE gallery SET likes = likes + 1 WHERE id = $1;'
    pool.query(query, [id])
    .then((result) => {
        console.log(`favorited picture with id ${req.params.id}`);
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log(`Error making database query ${query}`, error);
        res.sendStatus(500);
    });
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    // res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    sqlText = `SELECT * FROM gallery ORDER BY id ASC;`
    pool.query(sqlText)
    .then((result) => {
        console.log(`Got stuff back from the database`, result);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500)
    })
}); // END GET Routepublic

//POST route
router.post('/', (req, res) => {
    const gallery = req.body;
    const sqlText = `INSERT INTO gallery (path, description, likes)
                     VALUES ($1, $2, $3);`;
    pool.query(sqlText, [gallery.path, gallery.description, gallery.likes])
        .then((result) => {
            console.log(`Added picture to the database`, gallery);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); 
        })
})

//delete route
router.delete('/:id', (req, res) => {
    let idToDelete = req.params.id
    let query = `DELETE FROM gallery WHERE id = $1;`
    pool.query(query, [idToDelete]) 
    .then ((results) => {
        res.sendStatus(200)
    })
    .catch((error) => {
        console.log('error on delete!:', error);
        res.sendStatus(500); 
    })
})


module.exports = router;