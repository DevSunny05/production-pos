const express=require('express')
const mongoose=require('mongoose')
const morgan=require('morgan')
const bodyParser=require('body-parser')
const cors=require('cors')
const dotenv=require('dotenv')
const connectDB=require('./config/config')
require('colors')
const path=require('path')

// dotenv config
dotenv.config()
// db config
mongoose.set('strictQuery', false);
connectDB();

// rest app
const app=express();

// middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))


// routes
// item routes endpoint
app.use('/api/items',require('./routes/item-route'))
// user route endpoint
app.use('/api/users',require('./routes/user-route'))
// add bill
app.use('/api/bills',require('./routes/bills-route'))


// static 
app.use(express.static(path.join(__dirname, './client/build')))

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})


// port
const PORT=process.env.PORT || 8080


// listen
app.listen(PORT,()=>{
    console.log(`Server rening on PORT ${PORT}`.bgCyan.white);
})
