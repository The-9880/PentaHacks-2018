const spawn = require('child_process').spawn;

var process = spawn('python', ["SearchForAllCustomersInfo.py"]);
process.stdout.on('data', (data) => console.log(data.toString('utf-8')));

