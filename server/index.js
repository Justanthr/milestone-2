//import dependencies
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

//import routes
import postRoutes from './routes/posts.js'

const app = express()

app.use('/posts', postRoutes)

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

//connecting to mongodb
const CONNECTION_URL = 'mongodb+srv://admin:P@$$w0rd123@cluster0.t6xqsiq.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}) 
 .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
 .catch((error)=> console.log(error.message))

 mongoose.set('useFindAndModify', false)