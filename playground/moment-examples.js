var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('current timestamp', now.unix());

var timestamp = 1495908915;

console.log(moment.unix(timestamp).format('MMMM Do, YYYY @ h:mm A'));
