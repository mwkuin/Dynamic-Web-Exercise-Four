const express = require ("express");

const router = express.Router();

//include firebase
const firebase = require("firebase");

const db = firebase.firestore();
const blogposts = db.collection("blogposts");

const form = `<form action="/create/submit">
<input type="text" name="title" placeholder="Title" />
<input type="text" name="text" placeholder="Text" />
<input type="text" name="author" placeholder="Author" />
<button type="submit">Submit</button>
</form>`;

//create
router.get("/", (req, res) => res.send (form));

// /create/submit
router.get("/submit", (req, res) => {
  const queryParams = req.query;

  blogposts
  .doc()
  .set(queryParams)
  .then(function (doc) {
    res.send(
      "<h1>Submission Successful</h1><p><a href='/create'>Create another post</a></p>"
    );
  })
  .catch(function(error) {
    console.log('Error', error);
    res.send("Error submitting: ${error.toString()}");
  });
});

module.exports = router;
