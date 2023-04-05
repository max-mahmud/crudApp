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


app.use('https://crudapp2023.onrender.com/', router)

const port = process.env.PORT || 4000


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})