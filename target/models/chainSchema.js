"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var chainSchema = new _mongoose.Schema({
  regionArray: [{
    regionId: Number,
    regionName: String,
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
});

var _default = (0, _mongoose.model)('ChainData', chainSchema);

exports["default"] = _default;