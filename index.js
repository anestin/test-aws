const fs = require('fs')
fs.writeFileSync('about.txt',JSON.strigify({"name":"anestin"}))
const content = fs.readFileSync("about.txt")
console.log(content)
