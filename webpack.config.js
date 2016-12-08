module.exports = {
    entry: './index.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};
