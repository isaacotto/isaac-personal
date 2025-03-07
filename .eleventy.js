
module.exports = function(eleventyConfig) {

// Passes everything in these folders through to _site
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('icons');
    eleventyConfig.addPassthroughCopy('site.webmanifest');
    eleventyConfig.addPassthroughCopy('secret');
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy('CNAME');

    eleventyConfig.addPassthroughCopy('navbar.html');

    eleventyConfig.addPassthroughCopy('sound.html');
    eleventyConfig.addPassthroughCopy('image.html');
    eleventyConfig.addPassthroughCopy('text.html');
    eleventyConfig.addPassthroughCopy('contact.html');
    eleventyConfig.addPassthroughCopy('friends.html');

    eleventyConfig.addPassthroughCopy('_headers');


    // This isn't working and I don't know why.
    // It should be rebuilding when I change style.css
    // but it's not and I have to manually refresh.
    // eleventyConfig.addWatchTarget('css/*');
    eleventyConfig.addWatchTarget('css/*.*');

    // Sorts posts by date with latest at top.
    eleventyConfig.addCollection("posts", function(collectionApi) {
        return collectionApi.getFilteredByGlob("posts/*.md").sort((a, b) => {
            return new Date(b.data.postdate) - new Date(a.data.postdate);
        });
    });

    return {
        dir: {
            includes: "_includes",
            // output: "build"
        }
    };
};

// // Sorts posts according to date
//  module.exports = function(eleventyConfig) {
//    eleventyConfig.addCollection("posts", function(collectionApi) {
//      return collectionApi.getFilteredByGlob("posts/*.md").sort((a, b) => {
//        return new Date(b.data.postdate) - new Date(a.data.postdate);
//      });
//    });
//  };

// module.exports = function(eleventyConfig) {
//     eleventyConfig.addPassthroughCopy('css');
//     return {
//         dir: {
//             // input: 'src',
//             includes: '_includes',
//             output: '_site',
//         },
//         templateFormats: ['md', 'njk', 'html'],
//         passthroughFileCopy: true,
//     }
// };



// module.exports = function(eleventyConfig) {
//         eleventyConfig.addPassthroughCopy('fonts');
// };
