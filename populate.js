// require('dotenv').config()
// const Product = require('./models/product')
// const products = require('./products.json')

// const express = require('express')
// const app = express()

// const connectDB = require('./db/connect')


// app.use(express.json())


// app.get('/', (req,res) =>{
//     res.send('<h1>Store Api</h1><a href="/api/v1.products" >products</a>')
// })





// const port = process.nextTick.PORT || 3000

// const start = async () =>{
//   try {
//     await connectDB(process.env.MONGO_URI).then(console.log('Database connected'))
//     await Product.deleteMany()
//     await Product.create(products)
//     app.listen(port , console.log(`Server listening ${port}...`))
//   } catch (error) {
//     console.log(error);
//   }
// }

// start()

