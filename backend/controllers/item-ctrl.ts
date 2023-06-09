const Item = require('../models/item-model')

createItem = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a item',
        })
    }

    const item = new Item(body)

    if (!item) {
        return res.status(400).json({ success: false, error: err })
    }

    item
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: item._id,
                message: 'Item created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Item not created!',
            })
        })
}

String.prototype.toObjectId = function() {
  var ObjectId = (require('mongoose').Types.ObjectId);
  return new ObjectId(this.toString());
};

{ /*


If anyone's looking for a TypeScript version of MarsRobot's answer, try this:

function nameof<T>(obj: T, expression: (x: { [Property in keyof T]: () => string }) => () => string): string
{
    const res: { [Property in keyof T]: () => string } = {} as { [Property in keyof T]: () => string };

    Object.keys(obj).map(k => res[k as keyof T] = () => k);

    return expression(res)();
}

Usage:

const obj = {
    property1: 'Jim',
    property2: 'Bloggs',
    property3: 'Bloggs',
    method: () => 'a string',
    child: { property4: 'child1' }
};

const test1 = nameof(obj, x => x.property1);
const test2 = nameof(obj, x => x.property2);
const test3 = nameof(obj, x => x.method);
const test4 = nameof(obj.child, x => x.property4);

console.log(test1);    // -> 'property1'
console.log(test2);    // -> 'property2'
console.log(test3);    // -> 'method'
console.log(test4);    // -> 'property4'

*/ }


updateItem = async (req, res) => {
    const body = req.body

    console.log("body is ");
    console.log(body);

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    const req_params_id = req.params.id;
    console.log("req_params_id is ");
    console.log(req_params_id);
    const object_params_id = req_params_id.toObjectId();
    console.log("object_params_id is ");
    console.log(object_params_id);

    let mydata = {};
    filter = { _id: object_params_id };
    await Item.findOneAndUpdate(filter, body, {new: true})
      .then((result) => {
        mydata=result;
      })
      .catch((err) => {
       console.log(err);
      });
    console.log("mydata is ");
    console.log(mydata);
    console.log("mydata.booking_start is ");
    console.log(mydata.booking_start);
    console.log("mydata.email is ");
    console.log(mydata.email);

    return res.status(200).json({ success: true, data: mydata })
}

deleteItem = async (req, res) => {
   console.log("toDelete.id is ");
   console.log(req.params.id);
   const toDelete = await Item.findOneAndDelete({ _id: req.params.id })
   if (!toDelete) {
     return res
     .status(404)
     .json({ success: false, error: `Item not found` })
   }

   return res.status(200).json({ success: true, data: toDelete })
}

getItemById = async (req, res) => {
    console.log("getItemById.id is ");
    console.log(req.params.id);
    const item = await Item.findOne({ _id: req.params.id } )
    console.log("getItemById.length is ");
    console.log(getItemById.length);

    if (!item) {
      return res
      .status(404)
      .json({ success: false, error: `Item not found` })
    }
    return res.status(200).json({ success: true, data: item })
}

getItems = async (req, res) => {

    const items = await Item.find( { } );
    console.log("items.length is ");
    console.log(items.length);
    console.log("items[0].email is ");
    console.log(items[0].email);
    if (!items.length) {
        return res
            .status(404)
            .json({ success: false, error: `No Items found` })
    }
    return res.status(200).json({ success: true, data: items })
}

module.exports = {
    createItem,
    updateItem,
    deleteItem,
    getItems,
    getItemById,
}
