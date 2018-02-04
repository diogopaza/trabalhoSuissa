const mongoose = require( 'mongoose' )

const _schema = {
  name: {
    
    type: String,
    require : true,

  },
  type: String,
  email: String,
}
const schema = new mongoose.Schema( _schema )
const Model = mongoose.model( 'user', schema )

module.exports = Model
