//deposit money
//determine the number of lines to bet on
//collect bet amount
//spin slot machine
//check if the user won
//give their winnings
//play again
const prompt = require("prompt-sync")();

const ROWS = 5;
const COLUMNS = 6;


const depositMoney=()=>{
    while (true){
    const depositAmount=prompt("Enter deposit amount");
    const numberDeposit=parseFloat(depositAmount);
    
    if(isNaN(numberDeposit) || numberDeposit<=0){
        console.log("Enter valid amount");

    }
    else{
        return numberDeposit;
    }
}
};

const getNumberOfLines=()=>{
    while (true){
        const lines=prompt("Enter the number of lines to bet on between 1-5");
        const numberOfLines=parseFloat(lines);
        
        if(isNaN(numberOfLines) || numberOfLines<=0 || numberOfLines>5){
            console.log("Enter valid value for number of lines, please try again");
    
        }
        else{
            return numberOfLines;
        }
    }
};

const getBet=(theBalance, lines)=>{
     while (true){
    const bet=prompt("Enter bet amount per lin");
    const numberBet=parseFloat(bet); 
    
    if(isNaN(numberBet) || numberBet<=0 || numberBet>theBalance / lines){
        console.log("You don't have enough balance, please try with different bet amount");

    }
    else{
        return numberBet;
    }
}
};
let theBalance =depositMoney();
const numberOfLines=getNumberOfLines();
const bet=getBet(theBalance);

