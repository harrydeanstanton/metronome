var path = require('path');

module.exports = {
    entry: "./JS/App.jsx",
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-2', 'react']
                    }
                }
            }
        ]
    }
}
