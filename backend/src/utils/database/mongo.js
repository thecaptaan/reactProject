const mongoose = require('mongoose')

mongoose.connect(process.env.GET_MONGO_URI)
mongoose.connection.on('connected', () => {
    console.log('MongoDB connection established')
})

mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection failed')
    console.log(error)
})

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log("'Ctrl + C' : MongoDB connection closed")
        process.exit(1)
    })
})