
module.exports = {
    entry   : __dirname + "/app/main.js",
    output  : {
        path    : __dirname + "/public",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.js']
    },
    module      : {
        loaders     : [
            {
                test    : /\.js?$/,
                loader  : 'babel',
                exclude : /node_modules/,
                query   : {
                    presets : [ 'es2015', 'react' ]
                }
            }
        ]
    },
    devServer   : {
        contentBase         : "./public/",
        historyApiFallback  : true
    }
};
