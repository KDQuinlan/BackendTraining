"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var storeSchema = new _mongoose.Schema({
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
  collection: 'storeCollection'
});

var _default = (0, _mongoose.model)('StoreData', storeSchema);

exports["default"] = _default;