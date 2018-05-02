"use strict";
// Start of game
function startGame() {
  let play = prompt("Would you like to play a game?").toLowerCase();
   if (play === "yes") {
     function startCombat() {
      let user = prompt("What is your name?");
      let userHealth = 40;
      let grantHealth = 10;
      let userWins = 0;
      while (userHealth > 0 && userWins < 3 && grantHealth >0) {
        let gameplay = prompt("Would you like to attack or quit?").toLowerCase();
        if (gameplay === "attack") {
          function getDamage(min, max) {
              min = Math.ceil(min);
              max = Math.floor(max);
              let damageLevel = Math.floor(Math.random() * (max - min + 1)) + min; 
              userHealth -= damageLevel;
              grantHealth -= damageLevel;
              console.log (`Total damage done to each person: ${damageLevel}`)
              console.log(` Your damage level is at ${userHealth}`);
              console.log(` Grant's damage level is at ${grantHealth}`);
                if (grantHealth <= 0 ) {
                userWins ++;
                grantHealth = 10;
                console.log(`Grant has been defeated ${user} wins.`)
                // This takes total of wins and then ends
                } if (userWins === 3) {
                    console.log(`Thanks for playing ${user}. You won!`);
                }      
          }
          getDamage(1,5);
        } else {
          console.log("Thank you for playing");
          break;
        }
        }
      }
    startCombat();
    }
   }
startGame();