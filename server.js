const express= require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
require('dotenv').config()
app.use(express.json())
app.use(cors())


mongoose.connect(process.env.URL, console.log(`DATABASE CONNECTED`))

const loginRouter = require('./routes/loginRouter')
const tourRouter = require('./routes/tourRouter')
const bookingRouter = require('./routes/bookRouter')

app.use('/', loginRouter)
app.use('/', tourRouter)
app.use('/', bookingRouter)


app.listen(3000, () => {
    console.log(`up and running on 3000`);
})