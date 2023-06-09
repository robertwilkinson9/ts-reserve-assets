const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose
    .connect('mongodb://127.0.0.1:27017/item', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
  console.log("Connection Successful!");

  const Itemschema = new Schema(
    {
        booking_date: { type: Date },
        expireAt: { type: Date },
        bucket: { type : Number },
        item: { type: String },
        email: { type: String },
    },
  )

  var Item = mongoose.model('Item', Itemschema, 'item');

  Item.find({ })
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

  var testitem = new Item( {"booking_date" : ISODate("2023-05-25"), "expireAt" : ISODate("2023-05-26"), "bucket" : 2, "item" : "2f18", "email" : "robert.wilkinson@raytheon.co.uk"} )
});
