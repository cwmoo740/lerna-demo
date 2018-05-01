import path from 'path';
import webpack from 'webpack';

const config = {
    entry: {
        main: [
            'babel-polyfill',
            path.resolve(__dirname, '..', 'client')
        ]
    },
    output: {
        publicPath: '/assets',
        filename: '[name].js'
    },
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            API_URL: JSON.stringify(`http://localhost:${process.env.npm_package_config_port}/api`)
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, '..', 'client'),
                    path.resolve(__dirname, '..', '..', 'packages')
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'babel-preset-env',
                            'babel-preset-react'
                        ],
                        plugins: [
                            'babel-plugin-transform-class-properties'
                        ]
                    }
                }
            }
        ]
    }
};

export default config;
