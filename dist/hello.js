'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var batmanUrl = 'http://www.omdbapi.com/?t=Batman&y=&plot=short&r=json';
_axios2.default.get(batmanUrl).then(function (response) {
    console.log(response);
});