module.exports = ( Model ) => ( req, res, myQuery ) => {
    
    console.log(myQuery)
    

    Model.findOne(   myQuery  , (err, data) =>{
        if(err)
            res.end('deu erro')
        res.json( data )
        res.end()
    })
  
}