// require('./style.css');
import './style.css'

document.write('It works.')
document.write(require('./module.js')) // 添加模块

var _ = require('underscore');
var arr = _.range(5);

document.write('<br/>--------------------------------<br/>');
document.write(arr);

document.write('<br/>--------------------------------<br/>');
_.each(arr, function(i) {
    document.write(i);
});

document.write('<br/>--------------------------------<br/>');
_.each(arr, function(n) {
    document.write(n);
});

// _.each(arr, document.write);
// _.each(arr, document.write.bind(document));