const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Itemschema = new Schema(
    {
        booking_start: { type: Date },
        booking_end: { type: Date },
        expireAt: { type: Date },
        bucket: { type : Number },
        item: { type: String },
        email: { type: String },
    },
)

var Item = mongoose.model('Item', Itemschema, 'item');
module.exports = Item
