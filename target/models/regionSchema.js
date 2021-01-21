"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var regionSchema = new _mongoose.Schema({
  storeArray: [{
    storeId: Number,
    storeName: String,
    today: Number,
    lastYear: Number,
    lastYearDay: Number
  }],
  areaArray: [{
    id: Number,
    name: String,
    today: Number,
    lastYear: Number,
    lastYearDay: Number,
    divisionArray: [{
      id: Number,
      name: String,
      today: Number,
      lastYear: Number,
      lastYearDay: Number
    }]
  }]
}, {
  collection: 'regionCollection'
});

var _default = (0, _mongoose.model)('RegionData', regionSchema);

exports["default"] = _default;