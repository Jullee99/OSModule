var os = require("os");
console.log("CPU Architecture:" , os.arch());
console.log("Free Memory of System:" , os.freemem() / (1024 * 1024 * 1024) + "GB");
console.log("Total Memory of System:" , os.totalmem() / (1024 * 1024 * 1024) + "GB");
console.log("Platform:" , os.platform());
console.log("Information about Current User:" , os.userInfo());