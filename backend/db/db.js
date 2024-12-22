import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017");

const Bounties = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    links:{
        type:[String],
        required:true,
    },
    amount:{
        type:String,
        required:true,
    },
    applicants:{
        type:[{
            address:{
                type:String,
                required:true,
            },
            links:[String]
        }],
        required:true,
      
    },
    isAvailed:{
        type:Boolean,
        required:true,
    },
    availer:{
        type:String,
        required:true,
        unique:true,
    }

});

const Bounty = new mongoose.model("Bounty",Bounties);

export default Bounty;