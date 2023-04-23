const path = require('path');

module.exports = {
    entry: {
        main: './src/index.ts',
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dest'),
    },
    builtins: {
        html: [{ template: './src/index.html' }],
    },
    devServer: {
        hot: true
    },
};