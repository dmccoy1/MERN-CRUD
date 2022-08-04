const mongoose = require('mongoose')

const ListSchema = new mongoose.Schema({
    itemName:{
        type: String,
        required: true,
    },
    itemPrice:{
        type: Number,
        required: true,
    },
});

const Item = mongoose.model("List",ListSchema)
module.exports = Item;