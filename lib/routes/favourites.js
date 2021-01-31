const express = require('express')
const router = express.Router()

const { favouritesController } = require('../controllers/favourites')

router.get('/favourites', favouritesController)

module.exports = router