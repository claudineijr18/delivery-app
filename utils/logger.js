const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "..", "logs");
const logFile = path.join(logsDir, "log.txt");

function logError(error) {
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
  }

  const message = `${new Date().toISOString()} - ${error.message}\n`;
  fs.appendFileSync(logFile, message);
}

module.exports = { logError };