const os = require('os');

console.log("Architecture "+os.arch());
console.log("CPU "+os.cpus().length);
console.log("OS "+os.platform());