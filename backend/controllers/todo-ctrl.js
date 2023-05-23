const Desk = require('../models/desk-model')

createDesk = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a desk',
        })
    }

    const desk = new Desk(body)

    if (!desk) {
        return res.status(400).json({ success: false, error: err })
    }

    desk
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: desk._id,
                message: 'Desk created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Desk not created!',
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


updateDesk = async (req, res) => {
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
    await Desk.findOneAndUpdate(filter, body, {new: true})
      .then((result) => {
        mydata=result;
      })
      .catch((err) => {
       console.log(err);
      });
    console.log("mydata is ");
    console.log(mydata);
    console.log("mydata.due is ");
    console.log(mydata.due);
    console.log("mydata.summary is ");
    console.log(mydata.summary);
    console.log("mydata.text is ");
    console.log(mydata.text);

    return res.status(200).json({ success: true, data: mydata })
}

deleteDesk = async (req, res) => {
   console.log("toDelete.id is ");
   console.log(req.params.id);
   const toDelete = await Desk.findOneAndDelete({ _id: req.params.id })
   if (!toDelete) {
     return res
     .status(404)
     .json({ success: false, error: `Desk not found` })
   }

   return res.status(200).json({ success: true, data: toDelete })
}

getDeskById = async (req, res) => {
    console.log("getDeskById.id is ");
    console.log(req.params.id);
    const desk = await Desk.findOne({ _id: req.params.id } )
    console.log("getDeskById.length is ");
    console.log(getDeskById.length);

    if (!desk) {
      return res
      .status(404)
      .json({ success: false, error: `Desk not found` })
    }
    return res.status(200).json({ success: true, data: desk })
}

getDesks = async (req, res) => {

    const desks = await Desk.find( { } );
    console.log("desks.length is ");
    console.log(desks.length);
    console.log("desks[0].summary is ");
    console.log(desks[0].summary);
    if (!desks.length) {
        return res
            .status(404)
            .json({ success: false, error: `No Desks found` })
    }
    return res.status(200).json({ success: true, data: desks })
}

module.exports = {
    createDesk,
    updateDesk,
    deleteDesk,
    getDesks,
    getDeskById,
}
