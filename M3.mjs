import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

console.log("Welkom bij onze quiz!")
let stad =await userInput.question("Vraag 1: Wat is de hoofdstad van Frankrijk: ")
if(stad == "Parijs "|| stad == 'parijs'){
    console.log("Dat is helemaal juist")
}else{
    console.log("Dat is fout de hoofdstad is Parijs")
}
console.log()
let planeet=parseFloat(await userInput.question("Vraag 2: Hoeveel planeten zijn er in ons stelsel: "))
if(planeet == 9){
    console.log("Dat is juist")
}else{
    console.log("Dat is jammer genoeg fout het zijn er 9")
}
console.log()
let dier=await userInput.question("Vraag 3: Wat is het grootstezoogdier ter wereld: ")
if(dier=='blawue vinvis'||dier=="Blauwe vinvis"){
    console.log("Dat is helemaal juist")
}else{
    console.log("Dat is fout het juiste antwoord was blauwe vinvis")
}
console.log()




process.exit()