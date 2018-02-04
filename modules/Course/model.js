const mongoose = require( 'mongoose' )
//const Schema = mongoose.Schema
const MODEL_NAME = 'Course'


const _schema = {
  name: String,
  teacher: {
    type: String,
    
    required: true
  },
  books : [{type: mongoose.Schema.Types.ObjectId, ref:'book'}],
  students: [{type: mongoose.Schema.Types.ObjectId, ref: 'user'}],
 // estudantes:[{type: mongoose.Schema.Types.ObjectId, ref: 'user'}]
}
const schema = new mongoose.Schema( _schema )
const Model = mongoose.model( MODEL_NAME, schema )

module.exports = Model
