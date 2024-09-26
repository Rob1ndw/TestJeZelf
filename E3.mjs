import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
import { markAsUntransferable } from 'node:worker_threads';
import { availableParallelism } from 'node:os';
const userInput = readline.createInterface({input, output});

let maand=await userInput.question("Van welke maand wil je de dagen weten? ")
let dagen=0

switch(maand){
    case 'januari':
        dagen=31
        break
    case 'februari':
        dagen=28 +" of "+29
        break
    case 'maart':
        dagen =31
        break
    case 'april':
        dagen=30
        break
    case 'mei':
        dagen = 31
        break
    case 'juni':
        dagen = 30
        break
    case 'juli':
        dagen =31
        break
    case 'augustus':
        dagen=31
        break
    case 'september':
        dagen =30
        break
    case 'oktober':
        dagen=31
        break
    case 'november':
        dagen=30
        break
    case 'december':
        dagen=31
        break
}

console.log("De maand "+ maand + " heeft " + dagen + " dagen")

process.exit()