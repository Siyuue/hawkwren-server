const Fuse = require('fuse.js');

module.exports = class TweetSearchEngine {
    constructor() {
        this.fuseOptions = {
            includeScore: true,
            ignoreLocation: true, // We don't care where in the tweet the match occcurs
            keys: ['text'],
        };

        // this._fuse = new Fuse(fuseOptions);
    }

    search(tweets, searchText) {
        const fuse = Fuse(tweets, this.fuseOptions);
        return fuse.search(searchText)
            .map((el) => ((el.score < 0.6) ? ({ text: el.item.text, score: el.score }) : null))
            .filter((el) => (!!el));
    }
};
