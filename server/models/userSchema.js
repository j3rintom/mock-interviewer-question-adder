const mongoose =require("mongoose")

const userSchema = mongoose.Schema({
    id:String,
    interviews:{
        type:Array,
        default:[]
    },
    score:{
        type:Number,
        default:0
    }
});


const UserSchema = mongoose.model('UserSchema',userSchema)

module.exports = UserSchema
