const mongoose = require('mongoose');

const Schema  = mongoose.Schema;


let User = new Schema({

     name: {
        type: String,
        required:true
      },
      email: {
        type: String,
        required:true
        
      },
      password: {
        type: String,
        required:true
      },
    //   verifypassword: {
    //     type: String,
    //      required:true
    //   },
    //   mobile: {
    //     type: Number,
    //      required:true
    //   },
    //   address: {
    //     type: String,
    //      required:true
    //   },
     



},{
    collection:'user'
})

module.exports = mongoose.model('user',User);


