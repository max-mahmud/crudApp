const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDb =require('./config/db')
const router = require('./router/router')
const  cors = require('cors')


dotenv.config()
connectDb()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.use('/', router)

const PORT = process.env.PORT || 4000


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})