const pierre = document.getElementById('pierre');
const feuille = document.getElementById('feuille');
const ciseaux = document.getElementById('ciseaux');
const computer = document.getElementById('computer');
let playerChoice;
let timer;
let winner = "DRAW";
let playerScore = localStorage.getItem('playerScore') ? localStorage.getItem('playerScore'): 0;

// && et ?? tricks à revoir

computer.addEventListener('click', ()=>{
    timer = setInterval(()=>{
        counter --;
        computer.textContent=counter;
        if (counter === 0) {
            clearInterval(timer)
            const computerChoice = Math.floor(Math.random()*3);
            switch(computerChoice){
                case 0:
                    computer.textContent="feuille";
                    if (playerChoice === "ciseaux") {
                        winner="player";
                    }
                    break;
                case 1: 
                    computer.textContent="pierre";
                    if (playerChoice === "ciseaux") {
                        winner="computer";
                    }
                    break;
                case 2:
                    computer.textContent="ciseaux";
                    if (playerChoice === "feuille") {
                        winner = "computer";
                    }
                    break;
                
            }
        }
    }, 1000)
})

pierre.addEventListener('click', ()=>{
    playerChoice = 'PIERRE';
})
feuille.addEventListener('click', ()=>{
    playerChoice = 'FEUILLE';
})
ciseaux.addEventListener('click', ()=>{
    playerChoice = 'CISEAUX';
})