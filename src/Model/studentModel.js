const mongoose = require('mongoose')
const Schema = mongoose.Schema



const studentSchema = new Schema({
    name:{type:String },
    age:{type:Number},
    diemTb:{type:Number},
    status:{type:Number},
    Image:{type:String},
    
} , {timestamps:true})

module.exports = mongoose.model('student' , studentSchema)