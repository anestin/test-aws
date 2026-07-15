const fs = require('fs')
fs.writeFileSync('about.txt',JSON.strigify({"name":"anestin"}))
cosnt content = fs.readFileSync("about.txt")
console.log(content)
