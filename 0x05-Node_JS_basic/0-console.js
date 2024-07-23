// function returns string in stdout.
function displayMessage(str) { return process.stdout.write(`${str}\n`); }
module.exports = displayMessage;
