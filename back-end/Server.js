const express=require('express')
const cors=require('cors')
const connection=require('./mongo/mongoose')
const router =require('./Router')
const dotenv=require('dotenv')



connection()

const app=express()
app.use(express.json())
app.use(cors())
app.use('/',router)
dotenv.config()

 
Port=5000

app.listen(Port,console.log(`Running on port ${Port}`)
)  