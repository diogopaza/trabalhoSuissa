const mongoose = require( 'mongoose' )

const _schema = {
  title: {
    
    type: String,
    require : true,

  },
  author: String,
  pages: Number,
}
const schema = new mongoose.Schema( _schema )
const Model = mongoose.model( 'book', schema )

module.exports = Model


