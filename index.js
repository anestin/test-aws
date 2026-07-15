const fs = require('fs')
fs.writeFileSync('about.txt',JSON.stringify({"name":"anestin"}))
const content = fs.readFileSync("about.txt")
console.log(content)
