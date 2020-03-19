const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.PORT || 3999;
require('dotenv').config();

//Import routes
const cakeRoutes = require('./routes/cake.routes')

//setup express
app.use(cors())
app.use(express.json())


//call the route
app.use('/cakes', cakeRoutes)

app.use( async (req,res)=>{
    return res.send("<h1>Well, nothing to look here!</h1>")
})


//----------------DB-----------------------------
// Set up mongoose connection
const mongouri = 'mongodb+srv://lolnrj07:67XzLG6mtfyhBGB@cluster0-xmri0.gcp.mongodb.net/test_cake?retryWrites=true&w=majority'
const uri = process.env.ATLAS_URI || mongouri;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true  }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})