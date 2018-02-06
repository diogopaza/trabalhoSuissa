const express = require( 'express' )
const router = express.Router()
const url = require('url');

const Controller = require( './controller' )

router.get( '/', ( req, res, next ) => 
 
 
  Controller.find( req, res)
    
)

router.get('/name', (req, res, next) => {
  const myQuery = req.query
  const valuesQuery =  Object.values( myQuery ) 
  console.log(valuesQuery)
  console.log(valuesQuery.length)
  if(valuesQuery.length > 1)
    return res.status(400).send({error: 'invalid parameter' })


   
 
  Controller.findByName(req, res,myQuery)

})
 
  
 


router.get( '/:id', ( req, res, next ) => 
  Controller.findOne( req, res )
)

router.post( '/', ( req, res, next ) => 
  Controller.create( req, res )
)

router.put( '/:id', ( req, res, next ) => 
  Controller.update( req, res )
)

router.delete( '/:id', ( req, res, next ) => 
  Controller.remove( req, res )
)



module.exports = router