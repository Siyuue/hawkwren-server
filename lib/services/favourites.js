const axios = require('axios')

const twitterUrl = process.env.TWITTER_API_URL
const favouritesUrl = 'favorites/list.json'

function favouritesHandler(user) {
    if(typeof user !== 'string') {
        return {
            error: 'User must be string, bur found ' + typeof user,
            res: null
        }
    }

    return axios.get(twitterUrl + favouritesUrl, {
        params: {
            count: 200,
            screen_name: user
        }
    }).then(function(res){
        return {
            error: null,
            res: res
        }
    }).catch(function(e){
        return {
            error: e,
            res: null
        }
    })
}

module.exports = {
    favouritesHandler
}