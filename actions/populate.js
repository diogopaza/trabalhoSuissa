module.exports = ( Model ) => async ( req, res ) => {
//res.end('ttt')
 

const query = {
    _id: req.params.id
  }
  console.log(query)

  return Model.findOne({ _id: query} ).populate(  'students').populate( 'books' ).exec( ( err, data ) => {
    if ( err ) return console.log( 'ERRO: ', err )

         return res.json( data )


  } )




}



