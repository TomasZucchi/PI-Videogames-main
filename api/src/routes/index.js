const { Router } = require('express');

const { videoGamesRoute, deleteVideoGameRoute } = require('./videogames');
const {postVideogame,videoGameByIdRoute} = require('./videogame.js');
const genresRoute = require('./genres');
const router = Router();

// GET
router.get('/videogames', videoGamesRoute);
router.get('/videogames/:id', deleteVideoGameRoute);
router.get('/videogame/:id', videoGameByIdRoute);
router.get('/genres', genresRoute);
// POST
router.post('/videogames', postVideogame);
module.exports = router;
