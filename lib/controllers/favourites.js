const { favouritesHandler } = require('../services/favourites')

async function favouritesController(req, res) {
    const user = req.query.user
    const searchTerm = req.query.search_term
    const response =  await favouritesHandler(user, searchTerm)
    if(response.error){
        res.send({
            error: response.error
        })
        return
    }
    res.send({
        res: response.res
    })
}

module.exports = {
    favouritesController
}