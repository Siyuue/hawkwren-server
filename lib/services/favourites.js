const SearchEngine = require('../helpers/SearchEngine');
const TwitterService = require('../helpers/TwitterService');

function favouritesHandler(user, term) {
    if (typeof user !== 'string') {
        return {
            error: `User must be string, but found ${typeof user}instead`,
            res: null,
        };
    }

    const searchEngine = new SearchEngine();
    const tweets = TwitterService.favourites();
    if (tweets.error) {
        return {
            error: tweets.error,
            res: null,
        };
    }
    return searchEngine.search(tweets, term);
}

module.exports = {
    favouritesHandler,
};
