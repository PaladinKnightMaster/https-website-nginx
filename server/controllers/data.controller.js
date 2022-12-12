const mongoose = require('mongoose');
let DataModel = require('../models/data.model');

function info (req, res, next) {
  try {
    console.log(req.body);
    if (req.body == {})
      return
    const { d1, d2, d3 } = req.body
    DataModel.findOne({ d1: d1, d2: d2, d3: d3 })
    .exec((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json({
          data: data
        })
      }
    })
  } catch(error) {
    console.log('error in data.controller/info: ' + error)
  }
}

// function create (req, res, next) {
//   try {
//     // console.log(req.body);
//     BillModel.create(req.body, (error, data) => {
//       if (error) {
//         return next(error)
//       } else {
//         res.json(data)
//       }
//     })
//   } catch(error) {
//     console.log('error in bill.controller/create: ' + error)
//   }
// }

// function update (req, res, next) {
//   try {
//     // console.log(req.body);
//     BillModel.findByIdAndUpdate(req.params.id, {
//       $set: req.body
//     }, (error, data) => {
//       if (error) {
//         return next(error);
//       } else {
//         res.status(200).json({msg: 'Success'})
//         console.log('Bill successfully updated!')
//       }
//     })
//   } catch(error) {
//     console.log('error in bill.controller/update: ' + error)
//   }
// }

// function remove (req, res, next) {
//   try {
//     // console.log(req.body);
//     BillModel.findByIdAndUpdate(req.params.id, {
//       $set: { deleted_date: new Date() }
//     }, (error, data) => {
//       if (error) {
//         return next(error);
//       } else {
//         res.status(200).json({
//           msg: data
//         })
//         console.log('Bill successfully removed!')
//       }
//     })
//   } catch(error) {
//     console.log('error in bill.controller/remove: ' + error)
//   }
// }

// function view (req, res, next) {
//   try {
//     // console.log(req.body);
//     BillModel.findById(req.params.id)
//     .exec((error, data) => {
//       if (error) {
//         return next(error)
//       } else {
//         res.json(data)
//       }
//     })
//   } catch(error) {
//     console.log('error in bill.controller/view: ' + error)
//   }
// }




module.exports = {
  info
}