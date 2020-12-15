
import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import {errorHandler, notFound} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'

connectDB()
const app = express()

dotenv.config()

var RateLimit = require('express-rate-limit');
var limiter = new RateLimit({
  windowMs: 1*60*1000, // 1 minute
  max: 50
});
app.use(limiter);

app.use('/api/products',productRoutes)


const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
