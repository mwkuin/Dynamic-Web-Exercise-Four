const express = require ("express");

const router = express.Router();

//include firebase
const firebase = require("firebase");
//initalize firestore database
const db = firebase.firestore();

//reference to collection
const blogposts = db.collection("blogposts");

router.get("/", (req, res) => {
  const blogpostsArray = [];
//get blog posts
  blogposts
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      //push doc into array every time the query loops over existing articles
      blogpostsArray.push(doc.data());
    });
    return res.send(blogpostsArray);
  })
  .catch(function(error){
    console.log('Error:', error);
    return res.send(error);
  });

});



module.exports = router;
