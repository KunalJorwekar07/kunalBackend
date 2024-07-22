import fs from 'fs'

console.log("hay");
fs.writeFileSync("kunal.txt","hello kunal how are you")
console.log("kunal");


//so this is blocking code it blocks the orignal stream and create file kunal