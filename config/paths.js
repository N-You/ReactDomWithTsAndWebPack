const path = require('path')

module.exports = {
  // source file
  src:path.resolve(__dirname,'../src'),
  // build file
  build:path.resolve(__dirname,'../dist'),
  // static file
  public:path.resolve(__dirname,'../public')
}