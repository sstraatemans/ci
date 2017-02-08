const path = require('path');
const webpack = require('webpack');

module.exports = function(env) {
  const nodeEnv = env && env.prod ? 'production' : 'development';
  const isProd = nodeEnv === 'production';

  const plugins = [];
  const rules = [
    {
      enforce: "pre",
      test: /\.jsx?$/,
      loader: "eslint-loader",
      exclude: /node_modules/
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
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
            notExtractLoader: 'style-loader',
            loader: 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!resolve-url!postcss',
        }),
      }
    );

  } else {
    plugins.push(
      new webpack.HotModuleReplacementPlugin()
    );

    rules.push(
      {
          test: /\.scss$/,
          loaders: [
              'style-loader?sourceMap',
              'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]',
              'sass-loader'
          ]
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
       alias: {
         react: 'preact-compat',
         'react-dom': 'preact-compat'
       },
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
