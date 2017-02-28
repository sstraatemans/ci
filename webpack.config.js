const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(env) {
  const nodeEnv = env && env.prod ? 'production' : 'development';
  const isProd = nodeEnv === 'production';

  const plugins = [
    new ExtractTextPlugin({filename: 'styles.css', allChunks: true})
  ];
  const rules = [
    {
      enforce: "pre",
      test: /\.jsx?$/,
      loader: "eslint-loader",
      exclude: /node_modules/
    },
    {
      test: /\.jsx$/,
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
  ];

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

    rules.push(
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        }),
      }
    );

  } else {
    plugins.push(
      new webpack.HotModuleReplacementPlugin()
    );

    rules.push(
      {
        test: /\.s?css$/,
         loaders:
             ExtractTextPlugin.extract({fallback: 'style-loader',
             use: [
             'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
             'sass-loader?sourceMap&config=sassLoader']})

      }
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
      //  alias: {
      //    react: 'preact-compat',
      //    'react-dom': 'preact-compat'
      //  },
      extensions: ['.js', '.jsx', '.json', 'scss', 'css']
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
      rules
    }
  };

};
