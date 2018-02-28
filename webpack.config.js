const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ls = require('ls');

const plugins = [
  new webpack.EnvironmentPlugin(
    Object.assign({
      NODE_ENV: 'development'
    })
  )
];
const entry = {};

for (const filename of ls('examples/*.html')) {
  const name = filename.name;
  entry[name] = [`./examples/${name}.js`];
  plugins.push(
    new HtmlWebpackPlugin({
      template: `examples/${name}.html`,
      chunksSortMode: 'manual',
      filename: name + '.html',
      chunks: ['common', name],
    })
  );
}
plugins.push(new webpack.optimize.CommonsChunkPlugin({
  name: 'common',
  chunks: Object.keys(entry),
}));

module.exports = {
  resolve: {
    alias: {
      openlayers: 'openlayers/src/ol'
    }
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  entry: entry,
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    disableHostCheck: true,
    overlay: true
  }
};
