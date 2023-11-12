const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const refreshSchema = new Schema({
    token:{
        type:String,
        required:true,
    }
});

const refresh = mongoose.model('refresh', refreshSchema);

module.exports = refresh;