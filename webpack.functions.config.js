/* eslint-disable import/no-extraneous-dependencies */

const slsw = require('serverless-webpack')

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
  externals: {
    bufferutil: 'commonjs bufferutil',
    'utf-8-validate': 'commonjs utf-8-validate',
    knex: 'commonjs knex',
    'pg-native': 'commonjs pg-native',
  },
  // mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  mode: 'production',
}
