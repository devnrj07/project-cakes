//define your schema here, how your json object should look like in the db

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const cakeSchema = new Schema({

    title : {type: String, required:true,unique: true, trim: true,max:100},
    price : {type:Number,required:true},
    url : {type:String,},
    description : {type : String, required : true, min:20}
},
{
    timestamps: true
})

module.exports = mongoose.model('Cake',cakeSchema)