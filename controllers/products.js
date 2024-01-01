const Product = require('../models/product')

const getAllProductsStatic = async (req,res) =>{
  
  const products = await Product.find({})
  res.status(200).json(products)
}

const getAllProducts = async (req,res) =>{
    const {feature , name } = req.query
    const queryObject = {}
    if(feature)   queryObject.feature = feature === 'true' ? true : false
    if(name)   queryObject.name = name

    const products = await Product.find(queryObject)

    res.status(200).json({products})

}  

module.exports = {getAllProducts,getAllProductsStatic}