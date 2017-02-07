const path = require('path');
const webpack = require('webpack');

module.exports = function(env) {
  const nodeEnv = env && env.prod ? 'production' : 'development';
  const isProd = nodeEnv === 'production';

  const plugins = [];


  if (isProd) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
        },
        output: {
          comments: false,
        },
      })
    );
  } else {
    plugins.push(
      new webpack.HotModuleReplacementPlugin()
    );
  }



  return {
    context: __dirname,
    entry: ['./app/ClientApp.jsx'],
    devtool: isProd ? '' : 'cheap-module-source-map',
    plugins,
    output: {
      path: path.join(__dirname, '/dist'),
      publicPath: '/dist/',
      filename: '[name].bundle.js'
    },
    resolve: {
       alias: {
         react: 'preact-compat',
         'react-dom': 'preact-compat'
       },
      extensions: ['.js', '.jsx', '.json']
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: false
    },
    devServer: {
      publicPath: '/dist/',
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.jsx?$/,
          loader: "eslint-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                url: false
              }
            }
          ]
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          include: [
            path.resolve('app'),
            path.resolve('node_modules/preact-compat/src')
          ]
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    }
  };

};
