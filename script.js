/* Pending tasks -
  1) Highlight the winner score
  2) Add a few more counters like (eg-period, fouls, time)*/

// Defining all the variavles
const scoreA = document.getElementById('scoreA');
const scoreb = document.getElementById(`scoreB`);
let aScore = 0;
let bScore = 0;

function newGame(){     
    bScore = 0;
    aScore = 0;
    scoreA.innerText = 0;
    scoreb.innerText = 0;
}   

function plus1aFn(){
    aScore++;
    scoreA.innerText = aScore;
}

function plus2aFn(){
    aScore += 2;
    scoreA.innerText = aScore;
}

function plus3aFn(){
    aScore += 3;
    scoreA.innerText = aScore;
}

function plus1bFn(){
    bScore++;
    scoreb.innerText = bScore;
}

function plus2bFn(){
    bScore += 2;
    scoreb.innerText = bScore;
}

function plus3bFn(){
    bScore += 3;
    scoreb.innerText = bScore;
}

