import { error } from 'console';
import fs from 'fs'

console.log('hey');

fs.writeFile('kunal2.txt',"jod or wott",(error,data)=>{
    console.log('happy');
})

console.log('kunal');