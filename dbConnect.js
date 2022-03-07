const mongoose = require('mongoose')

const URL = 'mongodb://abdo290:Abdo1379@cluster0-shard-00-00.xjx9e.mongodb.net:27017,cluster0-shard-00-01.xjx9e.mongodb.net:27017,cluster0-shard-00-02.xjx9e.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-d3o2ax-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(URL)

let connectionObj = mongoose.connection

connectionObj.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})

connectionObj.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})
