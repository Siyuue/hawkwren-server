require('dotenv').config()
const app = require('express')()

const favoritesRouter = require('./lib/routes/favourites')

const PORT = process.env.PORT || 8080

app.use('/api/v1/', favoritesRouter)

app.listen(PORT, () => {
    console.log('Hawkwren server listening on port', PORT)
})