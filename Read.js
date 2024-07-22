import fs from 'fs'

fs.readFile('kunal.txt',(e,d)=>{
    console.log(d.toString());
})