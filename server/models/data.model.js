const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let dataSchema = new Schema(
  {
    d1:                       { type: Number, required: true },
    d2:                       { type: Number, required: true },
    d3:                       { type: String, required: true },

    rfc:                      { type: String, default: '' },
    deno_social:              { type: String, default: '' },
    capital_regime:           { type: String, default: '' },
    constitution_date:        { type: Date, default: null },
    op_start_date:            { type: Date, default: null },
    taxpayer_situation:       { type: String, default: '' },
    last_update_date:         { type: Date, default: null },
    federal_entity:           { type: String, default: '' },
    muni_dele:                { type: String, default: ' '},
    colonia:                  { type: String, default: '' },
    road_type:                { type: String, default: '' },
    road_name:                { type: String, default: '' },
    outdoor_num:              { type: String, default: '' },
    inside_num:               { type: String, default: '' },
    cp:                       { type: Number, default: null },
    email:                    { type: String, default: '' },
    al:                       { type: String, default: '' },
    regime:                   { type: String, default: '' },
    discharge_date:           { type: Date, default: null },
  },
  {
    collection: 'datas'
  })

module.exports = mongoose.model('Data', dataSchema)