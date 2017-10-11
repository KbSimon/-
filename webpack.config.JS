var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    entry: "./js/common.js",
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    plugins: [
        new CommonsChunkPlugin({
        name: "common"
        })
    ]
}