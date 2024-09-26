import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("Geef me een getal: "))

if (getal % 2 == 0){
    console.log("Je getal is even")
}
else{
    console.log("je getal is oneven")
}

process.exit()