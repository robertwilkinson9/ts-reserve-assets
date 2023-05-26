const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Deskschema = new Schema(
    {
        booking_start: { type: Date },
        booking_end: { type: Date },
        expireAt: { type: Date },
        floor: { type : Number },
        desk: { type: String },
        email: { type: String },
    },
)

var Desk = mongoose.model('Desk', Deskschema, 'desk');
module.exports = Desk
