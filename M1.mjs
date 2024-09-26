import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

console.log("1.Red Hot Chilipepers")
console.log("2.AC/DC")
console.log("3.Netsky")
console.log("4.De strangers")

let groep=parseFloat(await userInput.question("Kies een groep cijfers: "))

if(groep==1){
    consolel.log("Je hebt voor Red Hot Chilipeppers gekozen")
    console.log("Hun beste hit is: Give it away")
}else if(groep==2){
    console.log("Je hebt gekozen voor AC/DC")
    console.log("Hun beste hit is Dirty Deeds Done Dirt Cheap")
}else if(groep == 3){
    console.log("Je hebt gekozen voor Netsky")
    console.log("Hun beste song is Love has gone")
}else if(groep==4){
    console.log("Je hebt gekozen voor De strangers")
    console.log("Hun beste song is Mijnen blauwe geschelpte")
}

process.exit()