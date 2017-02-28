var fs = require('fs');
var logFile = fs.createWriteStream('./logs/log.txt');
var errorFile = fs.createWriteStream('./logs/error.txt');

var logger = new console.Console(logFile, logFile);

module.exports = logger


// console
// console.time('for-time');
// let sum = 0;
// for (var i = 0; i < 10000000; i++) {
//   sum += i;
// }
// console.timeEnd('for-time'); // for-time: 173ms
// // console.log(process);
// console.log(__dirname);
// var info = {
//   status: 200,
//   msg: {
//     user:{
//       name: 'Peter',
//       country: 'Japan',
//       company: {
//         name: '全球无限皮包公司',
//         ceo: {
//           name: 'Lucy'
//         }
//       }
//     }
//   }
// }

// console.log(util.inspect(info, {depth: null})); // 不限层级打印
// console.error('error')
// console.warn('warning')
// console.info('info')
// console.dir("dir")
// console.trace('trace') //此方法会输出到错误文件中，在日志前添加“Trace:”字符串。
// console.assert(true,'assert')
// console.assert(false,'assert')

