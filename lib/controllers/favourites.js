const { favouritesHandler } = require('../services/favourites')

async function favouritesController(req, res) {
    const user = req.query.user

    return await favouritesHandler(user)
}

module.exports = {
    favouritesController
}