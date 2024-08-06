const fs = require('fs')
function logInfo(message) {
  const timeStamps = new Date().toISOString();
  const logmessage = `${timeStamps} | INFO | ${message} \n`
  fs.appendFileSync("./logs/app.log",logmessage)
}
function logWarning(message) {
  const timeStamps = new Date().toISOString();
  const warnMessage = `${timeStamps} | WARNING | ${message} \n`
  fs.appendFileSync("./logs/app.log",warnMessage)
}
function logError(message) {
  const timeStamps = new Date().toISOString();
  const errorMessage = `${timeStamps} | ERROR | ${message} \n`
  fs.appendFileSync("./logs/app.log",errorMessage)
}
logInfo("This is an info message");
logWarning("This is a warning message");
logError("This is an error message");
module.exports = {
  logInfo,
  logWarning,
  logError,
};




