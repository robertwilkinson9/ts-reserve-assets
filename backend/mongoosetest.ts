const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose
    .connect('mongodb://127.0.0.1:27017/desk', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
  console.log("Connection Successful!");

  const Deskschema = new Schema(
    {
        booking_date: { type: Date },
        expireAt: { type: Date },
        floor: { type : Number },
        desk: { type: String },
        email: { type: String },
    },
  )

  var Desk = mongoose.model('Desk', Deskschema, 'desk');

  Desk.find({ })
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

  var testdesk = new Desk( {"booking_date" : ISODate("2023-05-25"), "expireAt" : ISODate("2023-05-26"), "floor" : 2, "desk" : "2f18", "email" : "robert.wilkinson@raytheon.co.uk"} )
});
