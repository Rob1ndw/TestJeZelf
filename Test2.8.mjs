import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let serie=await userInput.question("Welke tv serie wil je weten waar het afspeeld: ")
let stad;

switch(serie){
    case 'simpsons':
        stad = 'springfield'
        break
    
    case 'familyguy':
        stad = 'quahog'
        break

    case 'friends':
        stad = 'NY'
        break

    default: console.log("Ik ken deze serie niet")
}

console.log(serie + " vindt plaats in "+ stad)

process.exit()