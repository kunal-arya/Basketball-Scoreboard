class Scoreboard {
    constructor(scoreA, scoreB){
        this.scoreA = scoreA;
        this.scoreB = scoreB;
        this.newGame();
    }

    newGame(){
        this.a = 0;
        this.b = 0;
        this.updateDisplay();
    }

    team(teamName){
        this.teamName = teamName;
    }

    btnClick(points){
        this.score = 0;
        this.score += points;
        if(this.teamName === 'a'){
            this.a += this.score;
        } else {
            this.b += this.score;
        }
        this.updateDisplay();
    }

    updateDisplay(){
        this.scoreA.innerText = this.a;
        this.scoreB.innerText = this.b;
        this.winnerHighlight()
    }

    winnerHighlight(){
        if(this.a > this.b){
            this.scoreA.classList.add("winner-highlight");
            this.scoreB.classList.remove("winner-highlight");
        } else if(this.a < this.b) {
            this.scoreB.classList.add("winner-highlight");
            this.scoreA.classList.remove("winner-highlight");
        } else {
            this.scoreA.classList.remove("winner-highlight");
            this.scoreB.classList.remove("winner-highlight");
        }
    }
}


/* Pending tasks -
  1) Highlight the winner score
  2) Add a few more counters like (eg-period, fouls, time)*/

// Defining all the variavles
const scoreA = document.getElementById('scoreA');
const scoreB = document.getElementById(`scoreB`);
const oneABtn = document.getElementById('1a');
const twoABtn = document.getElementById('2a');
const threeABtn = document.getElementById('3a');
const oneBBtn = document.getElementById('1b');
const twoBBtn = document.getElementById('2b');
const threeBBtn = document.getElementById('3b');
const newGame = document.getElementById('new-game');
const winnerHighlight = document.querySelector('#winnerHighlight');


const scoreboard = new Scoreboard( scoreA , scoreB);

oneABtn.addEventListener('click' , () => {
    scoreboard.team('a');
    scoreboard.btnClick(1);
});

oneBBtn.addEventListener('click', () => {
    scoreboard.team('b');
    scoreboard.btnClick(1);
})

twoABtn.addEventListener('click', () => {
    scoreboard.team('a');
    scoreboard.btnClick(2);
});

twoBBtn.addEventListener('click', () => {
    scoreboard.team('b');
    scoreboard.btnClick(2);
})

threeABtn.addEventListener('click', () => {
    scoreboard.team('a');
    scoreboard.btnClick(3);
})

threeBBtn.addEventListener('click', () => {
    scoreboard.team('b');
    scoreboard.btnClick(3);
})

newGame.addEventListener('click', () => {
    scoreboard.newGame();
})