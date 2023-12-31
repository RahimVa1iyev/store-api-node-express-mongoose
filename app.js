require('dotenv').config()

const express = require('express')
const app = express()

const connectDB = require('./db/connect')

const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())


app.get('/', (req,res) =>{
    res.send('<h1>Store Api</h1><a href="/api/v1.products" >products</a>')
})


app.use(notFound)
app.use(errorHandlerMiddleware)


const port = process.nextTick.PORT || 3000

const start = async () =>{
  try {
    await connectDB(process.env.MONGO_URI).then(console.log('Database connected'))
    app.listen(port , console.log(`Server listening ${port}...`))
  } catch (error) {
    console.log(error);
  }
}

start()

