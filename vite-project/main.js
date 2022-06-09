import './style.css'

const userChoiceDiv = document.getElementById('user-choice'); //Top Div
const aiChoiceDiv = document.getElementById('ai-choice'); //Bottom Div
const choices = document.querySelectorAll('.choice'); //All choices: rock, cisors...

const rock = document.querySelector('.rock');
const leaf = document.querySelector('.leaf');
const cisors = document.querySelector('.cisors');
let userClick = null;

let timer = setInterval (() => {
  if (timer >= 5) {
    clearInterval(timer)
  }
  rock.addEventListener('click', ()=>{
    userClick = "rock";
  
  })
  leaf.addEventListener('click', ()=>{
    userClick = "leaf";
  
  })
  cisors.addEventListener('click', ()=>{
    userClick = "cisors";
  })
  
  // NEWER CODE
  let aiClick = null;
  for (const choose of choices) {
    aiClick = Math.floor(Math.random(choose))
    if (aiClick === userClick) {
      alert('Match nul')
    }
    else if(aiClick === "rock" && userClick === "leaf" ||
            aiClick === "leaf" && userClick === "cisors" ||
            aiClick === "cisors" && userClick === "rock") {
              alert('You won!')
            }
            else{
              alert('You loose')
            }
  
  
  }
  
}, 100)




/* OLDER CODE
for (const choose of choices) {
  let aiClick = null;
const min = 1;
const max = 2;
aiClick = Math.floor(Math.random(choices) * max);

}


//AI ROCK
if (aiClick === 0 && userClick === "rock") {
  alert("Match nul: Rock vs Rock");
}

if(aiClick === 0 && userClick === "leaf") {
  alert("You won ! AI played Rock and you played leaf")
}

if (aiClick === 0 && userClick === "cisors") {
  alert("You loose: AI played Rock and you played cisors")
}


// AI LEAF
if (aiClick === 1 && userClick === "rock") {
  alert("You loose: AI played Leaf and you played Rock")
}

if (aiClick === 1 && userClick === "leaf") {
  alert("Math nul: Leaf vs Leaf")
}

if (aiClick === 1 && userClick === "cisors") {
  alert("You win ! AI played Leaf and you played cisors")
}


//AI CISORS
if (aiClick === 2 && userClick === "rock") {
  alert("You win ! AI played cisors and you played rock")
}

if (aiClick === 2 && userClick === "leaf") {
  alert("You loose: AI played cisors and you played leaf")
}

if (aiClick === 2 && userClick === "cisors") {
  alert("Match nul: Cisors vs Cisors")
}
*/