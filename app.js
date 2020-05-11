//import express
const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

//require firebase
const firebase = require("firebase");
//get config object so we can communicate with firebase
const firebaseConfig = {
  apiKey: "AIzaSyA9bXFTRK0j9VcNz5J9Sa-TaONP7he5V3U",
  authDomain: "exercise-4-6293e.firebaseapp.com",
  databaseURL: "https://exercise-4-6293e.firebaseio.com",
  projectId: "exercise-4-6293e",
  storageBucket: "exercise-4-6293e.appspot.com",
  messagingSenderId: "650892583772",
  appId: "1:650892583772:web:57f3b92967bc46b83d9799"
};

//initial firebase
firebase.initializeApp(firebaseConfig);

//import routes
const indexRoute = require("./routes/index.js");
const postRoute = require("./routes/posts.js");
const createRoute = require("./routes/createArticle.js")
//create routes
app.use("/", indexRoute);
app.use("/post", postRoute);
app.use("/create", createRoute);


//set up app so that it runs when this file is run
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
