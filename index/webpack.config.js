const path = require('path')
module.exports = {
    entry: './src/index.js', //从哪个文件开始打包
    module: {
        rules: [
            {
                test: /\.jpg$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },
    output: {     //出口
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist")   //打包出的文件放在哪个文件夹下，绝对路径
    }
}