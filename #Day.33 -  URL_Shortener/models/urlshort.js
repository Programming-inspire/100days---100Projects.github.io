const mongoose = require('mongoose');


const UrlSchema = mongoose.Schema({
    longUrl : {
        type : String,
        require : true
    },
    shortUrl : {
        type : String,
        unique : true
    },
    clickCount : {
         type : Number,
         default : 0
    }
})


const UrlModel = mongoose.model('urlshort', UrlSchema);

module.exports = {UrlModel};