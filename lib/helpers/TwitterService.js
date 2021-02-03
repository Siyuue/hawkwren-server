const axios = require('axios');

const twitterUrl = process.env.TWITTER_API_URL;
const favouritesUrl = 'favorites/list.json';
const bearerToken = process.env.BEARER_TOKEN;

class TwitterService {
    static favourites(user) {
        const axiosConfig = {
            headers: {
                Authorization: `Bearer ${bearerToken}`,
            },
            params: {
                count: 200,
                screen_name: user,
            },
        };
        return axios.get(twitterUrl + favouritesUrl, axiosConfig)
            .then((res) => ({
                error: null,
                res: res.data,
            })).catch((e) => ({
                error: e,
                res: null,
            }));
    }
}

module.exports = TwitterService;
