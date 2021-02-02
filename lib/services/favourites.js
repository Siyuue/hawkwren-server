const axios = require('axios')
const Fuse = require('fuse.js')

const sortObject = require('../utils/sortObject')

const twitterUrl = process.env.TWITTER_API_URL
const favouritesUrl = 'favorites/list.json'
const bearerToken = process.env.BEARER_TOKEN


function favouritesHandler(user, term) {
    if(typeof user !== 'string') {
        return {
            error: 'User must be string, but found ' + typeof user + 'instead',
            res: null
        }
    }

    const config = {
        headers: {
          'Authorization': 'Bearer ' + bearerToken
        },
        params: {
            count: 200,
            screen_name: user
        }
      }
    return axios.get(twitterUrl + favouritesUrl, config)
        .then(function(res){
            return {
                error: null,
                res: searchTerm(res.data, term)
            }
        }).catch(function(e){
            return {
                error: e,
                res: null
            }
        })
}

function searchTerm(tweets, term){

    const fuseOptions = {
        includeScore: true,
        ignoreLocation: true, // We don't care where in the tweet the match occcurs
        keys: ['text']
    }

    const fuse = new Fuse(tweets, fuseOptions)
    return fuse.search(term).map((el) => (el.score < 0.6)?({text: el.item.text, score: el.score}):null).filter((el) => el ? true : false)

    // return tweets.map(function(tweet){
    //     if(tweet.text.search(regexTerm) !== -1) {
    //         return tweet.text
    //     }
    //     else return null
    // }).filter(function(tweet){
    //     if(tweet) return true
    // })
}

function analytics(tweets){
    const map = {}
    tweets.forEach(function(tweet){
        if(!map[tweet.user.screen_name]){
            map[tweet.user.screen_name] = 1
        } else {
            map[tweet.user.screen_name]++
        }
    })
    return sortObject(map)
}

module.exports = {
    favouritesHandler
}