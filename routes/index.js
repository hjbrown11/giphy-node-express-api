const express = require('express');
const router = express.Router();
const axios = require('axios').default;

const API_KEY = process.env.API_KEY;

const GIPHY_TRENDING = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=g`;

router.get('/', (req, res) => {
  // this will be the route for trending GIFs to be displayed
  res.render('index', { title: 'Express' });
});

router.get('/search', (req, res, next) => {
  res.render('search');
})

router.post('/search', (req, res, next) => {
  console.log(req.body);
  res.status(204).send({});
})

module.exports = router;

// below is the beginning of the search functionality
// const GIPHY_SEARCH = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}=${query}&limit=25&offset=0&rating=g&lang=en`;
// axios.get(GIPHY_SEARCH, (err, response, body) => {
//   if(err) { console.error (err) }

//   body = JSON.parse(body)
// })
