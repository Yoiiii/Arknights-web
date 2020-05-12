module.exports = {
    outputDir:__dirname+'/dist/',
    publicPath: process.env.NODE_ENV === 'production'
      ? '/web/'
      : '/'
  }