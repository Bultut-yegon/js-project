//deposit money
//determine the number of lines to bet on
//collect bet amount
//spin slot machine
//check if the user won
//give their winnings
//play again

const math = require ("mathjs");
const prompt = require("prompt-sync")();

const ROWS = 5;
const COLUMNS = 6;

const SYMBOLS_COUNT={
    A:2,
    B:4,
    C:6,
    D:8,
    E:10
    
}
const SYMBOL_VALUE={
    A:5,
    B:4,
    C:3,
    D:2,
    E:1
}


const depositMoney=()=>{
    while (true){
    const depositAmount=prompt("Enter deposit amount: ");
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
        const lines=prompt("Enter the number of lines to bet on between 1-5: ");
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
    const bet=prompt("Enter bet amount per line: ");
    const numberBet=parseFloat(bet); 
    
    if(isNaN(numberBet) || numberBet<=0 || numberBet>theBalance / lines){
        console.log("You don't have enough balance, please try with different bet amount");

    }
    else{
        return numberBet;
    }
}
};


const spin=()=>{
    const symbols=[];
    for(const[symbol,count] of Object.entries(SYMBOLS_COUNT)){
        for(let j=0;j<count;j++){
            symbols.push(symbol)
        }
        
    }

    const reels=[];
    for(let i=0;i<COLUMNS;i++){
        reels.push([]);
        const reelSymbols = [...symbols];
        for(j=0;j<ROWS;j++){
            const randomIndexing= math.floor(math.random()* reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndexing];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndexing, 1);
        }
    }
    
    return reels;
};

const transpose= (reels) =>{
    const rows=[];
    for(let i=0; i<ROWS; i++){
        rows.push([]);
        for(let j=0; j<COLUMNS; j++){
            rows[i].push(reels[j][i])
            
        }
    }
    return rows;
};


spin();
let theBalance =depositMoney();
const numberOfLines=getNumberOfLines();
const bet=getBet(theBalance);
const trans=transpose(reels);
console.log(trans);

