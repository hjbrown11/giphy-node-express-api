const express = require('express');
const router = express.Router();
const API_KEY = process.env.API_KEY;

const GIPHY_TRENDING = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=g`;
// const GIPHY_SEARCH = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}=${query}&limit=25&offset=0&rating=g&lang=en`

router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
