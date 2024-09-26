import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("Geef me een getal: "))
let min= 2
let max = 15

if(getal >= min && getal<max){
    console.log(getal + " ligt tussen " + min +" en "+ max)
}
else{
    console.log("Je getal ligt niet tussen "+ min +" en "+ max)
}
process.exit()