const fs = require("fs");

function logError(error) {
  const message = `${new Date().toISOString()} - ${error.message}\n`;
  fs.appendFileSync("logs/log.txt", message);
}

module.exports = { logError };