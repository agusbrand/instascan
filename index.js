require('babel-polyfill');
require('webrtc-adapter');

var Instascan = {
  Scanner: require('./lib/scanner'),
  Camera: require('./lib/camera')
};

module.exports = Instascan;
