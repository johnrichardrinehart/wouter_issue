const path = require('path');

module.exports = {
  mode: "development",
  // The below key:object format is used to force the css faile to be named "index.css" instead
  // of the default "main.css"
  // C.f.: https://github.com/webpack/webpack/blob/d870365/lib/EntryOptionPlugin.js#L44
  // and https://stackoverflow.com/questions/60139960/why-is-name-always-main-in-minicssextractplugin-for-webpack
  entry: {
    "index": { "import": "./index.js" },
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(cjs|ts|js|jsx|mjs)$/
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
};
