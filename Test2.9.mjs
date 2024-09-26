import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let dag = await userInput.question("Welke dag is het vandaag: ")
let week;

switch(dag){
    case 'maandag':
        week='weekdag'
        break
    
    case 'disndag':
        week ='weekdag'
        break

    case 'woensdag':
        week ='weekdag'
        break
    
    case 'donderdag':
        week='weekdag'
        break

    case 'vrijdag':
        week='weekdag'
        break

    case 'zaterdag':
        week ='weekenddag'
        break

    case 'zondag':
        week = 'weekenddag'
        break
}
console.log(dag + ' is een '+ week)

process.exit()