const path = require("path");

module.exports = {
  rootDir: path.join(__dirname, "./"),
  projects: [
     {
       displayName: "Server",
       testMatch: [ "**/__tests__/**/*test.js?(x)" ]
     }
  ]
}