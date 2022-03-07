const mongoose = require('mongoose')

const URL = 'mongodb+srv://abdo290:Abdo1379@cluster0.xjx9e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(URL)

let connectionObj = mongoose.connection

connectionObj.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})

connectionObj.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})
