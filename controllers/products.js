const Product = require('../models/product')

const getAllProductsStatic = async (req,res) =>{
  
  const products = await Product.find({})
  res.status(200).json(products)
}

const getAllProducts = async (req,res) =>{
    const {feature,name,sort } = req.query
    const queryObject = {}
    if(feature)   queryObject.feature = feature === 'true' ? true : false
    if(name)   queryObject.name = {$regex : name , $options :'i'}

    let result =  Product.find(queryObject)
    
    if(sort){
      const sortList = sort.split(',').join(' ')
      result = result.sort(sortList)
    }
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page-1) * limit

    result = result.skip(skip).limit(limit)


    const products = await result
    res.status(200).json({products})

}  

module.exports = {getAllProducts,getAllProductsStatic}