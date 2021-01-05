// Code your solutions in this file

const names = ["Ada", "Brendan", "Ali"]
const occasion = "surprise"
let thankYous = []

function writeCards(names, occasion){
    for (let i = 0; i < names.length; i++){
        //console.log(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
        thankYous.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    }
    return thankYous;
}

function countDown(num){
    let i = num
    while(i >= 0){
        console.log(i--)
        //i = i--
    }
}