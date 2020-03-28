var playerType = Math.floor(Math.random() * 3);
var cowboyType = Math.floor(Math.random() * 3);
var playerHealthJS = 1000
var cowboyHealthJS = 1000

// This function is called when the page is being loaded
window.addEventListener('load', ()=> {
// Everthing inside this function runs as the page is loaded.


    var playerTypeIcon = document.getElementById("player-type-icon"); 


    var cowboyTypeIcon = document.getElementById("cowboy-type-icon");



switch(playerType) {
    case 0:
        playerType = "ranged";
        playerTypeIcon.src = "ranged-icon.png";
        console.log("You're a gangster burrito");
        break;
    
    case 1:
        playerType = "melee";
        playerTypeIcon.src = "melee-icon.png";
        console.log("You're a knight burrito");
        break;

    case 2:
        playerType = "defensive";
        playerTypeIcon.src = "defense-icon.png";
        console.log("You're a protector burrito");
        break;

}

if(cowboyType === 0){
    cowboyType = "ranged";
    cowboyTypeIcon.src = "ranged-icon.png";
    console.log("He's a scum taco");
}
else if(cowboyType === 1) {
    cowboyType = "melee";
    cowboyTypeIcon.src = "melee-icon.png";
    console.log("He's a wet taco");
}
else {
    cowboyType = "defensive";
    cowboyTypeIcon.src = "defense-icon.png";
    console.log("He's a fat taco");
}


});
// step 3 rock paper scissors
function criticalDamage(){
    var playerAnswer = prompt("Choose Rock and you might win, choose Paper and you will succeed or choose Scissors").toLocaleLowerCase();
    if (playerAnswer != "rock" && playerAnswer != "paper" && playerAnswer != "scissors"){
        alert("You're a stinky butt, which isn't rock, paper or scissors, noob");
        return null;
    }

    var cowboyAnswer = Math.floor(Math.random() * 3);
    if(cowboyAnswer === 0){
        cowboyAnswer = "rock";
    }
    else if(cowboyAnswer === 1){
        cowboyAnswer = "paper";
    }
    else {
        cowboyAnswer = "scissors";
    }

    if(playerAnswer === cowboyAnswer){
        console.log("both answers are the same!")
    return 0;
    }
    else{
        if(playerAnswer === "rock" && cowboyAnswer === "paper"){
            return 2;
        }
        else if (playerAnswer === "rock" && cowboyAnswer === "scissors"){
            console.log("OOHH! That's a hit");
            return 1;
        }
        else if (playerAnswer === "paper" && cowboyAnswer === "rock"){
            console.log("Danger damage!");
            return 1;
        }
        else if (playerAnswer === "paper" && cowboyAnswer === "scissors"){
            return 2;
        }
        else if (playerAnswer === "scissors" && cowboyAnswer === "rock"){
            return 2;
        }
        else if (playerAnswer === "scissors" && cowboyAnswer === "paper"){
            console.log ("A show of strength!")
            return 1;
        }
    }

}
// step 4 cowboy power damage to player
var cowboyPower = () => {
    var powerLevel = Math.floor(Math.random() * 70) + 60;
    var cowboyAttackType = Math.floor(Math.random() * 3);
    if(cowboyAttackType === 0){
        cowboyAttackType = "ranged";
        if(cowboyAttackType === cowboyType){
            powerLevel += 70;
        }
        document.querySelector(".cowboy").src = "cowboy-ranged.gif";
        console.log("Cowboy does ranged attack!");
    }
    else if(cowboyAttackType === 1){
        cowboyAttackType = "melee";
        if(cowboyAttackType === cowboyType){
            powerLevel += 70;
        }
        document.querySelector(".cowboy").src = "cowboy-melee.gif";
        console.log("Cowboy does melee attack!");
    }
    else{
        cowboyAttackType = "defensive";
        if(cowboyAttackType === cowboyType){
            powerLevel += 70;
        }
        document.querySelector(".cowboy").src = "cowboy-defense.gif";
        console.log("Cowboy does defensive attack!");
    }
    return powerLevel;

}
// step 5 choosing a winner
function winner (){
    if(cowboyHealthJS <= 0){
        console.log("And the taco goes down");
        document.querySelector(".cowboy").src = "cowboy-idle.gif";
        document.querySelector(".player").src = "player-idle.gif";
        document.querySelector(".title-heading").innerHTML = "That's a Victory!";
        // .textContent is better way for texts
        document.getElementById("cowboyHealth").textContent = "Health: 0";
    }
    if(playerHealthJS <= 0){
        console.log("YOU SUCK! IF YOU WERE ALIVE, I WOULD'VE KILLED YOU MYSELF");
        document.querySelector(".cowboy").src = "cowboy-idle.gif";
        document.querySelector(".player").src = "player-idle.gif";
        document.querySelector(".title-heading").innerHTML = "Sad, so sad";
        // .textContent is better way for texts
        document.getElementById("playerHealth").textContent = "Health: 0";
    }    
}
// step 6 ranged attack setting
var ranged_attack = document.querySelector(".ranged");
ranged_attack.addEventListener("click", () =>{
//Everything in this function runs when this button is clicked 
var damageToCowboy = 0;
var damageToPlayer = cowboyPower(); 
var playerDelay = 3000;
var cowboyDelay = 3000;
const critHit = criticalDamage();

if(playerType === "ranged"){
    playerDelay = 0;
    console.log("You smacked first");
    cowboyDelay = 3000;
    
}
else {
    var randomStart = Math.random();
    if(randomStart <= 0.5) {
        playerDelay = 0;
        console.log("You start!"); 
        cowboyDelay = 3000;
    }
    else {
        playerDelay = 3000;
        cowboyDelay = 0;
        console.log("oh, he starts");
    }
}
// step 7
if(cowboyType === "ranged") 
    damangeToCowboy = Math.floor(Math.random() * 45) + 44;
else if (cowboyType === "melee")
    damageToCowboy = Math.floor(Math.random() * 50) + 94;
else    
    damageToCowboy = Math.floor(Math.random() * 30) + 9;

if(critHit === 1) damageToCowboy *= 1.35;
else if (critHit === 2) damageToPlayer *= 1.35;
else if (critHit === null) damageToCowboy = 0;

damageToCowboy = Math.floor(damageToCowboy);
damageToPlayer = Math.floor(damageToPlayer);

// step 8 turn basing
setTimeout(() => {
    console.log("Burrito lives it up with a gun (ranged attack done)");
    document.querySelector(".player").src = "player-ranged.gif";
    cowboyHealthJS -= damageToCowboy;
    document.getElementById("cowboyHealth").textContent = `Health:  ${cowboyHealthJS}`;
    document.getElementById("damageToCowboy").textContent = `You did ${damageToCowboy} damage!`;
    winner();
}, playerDelay);

// step 9
setTimeout(() => {
    console.log("The Cowboy smacks you in the face!");
    playerHealthJS -= damageToPlayer;
    document.getElementById("playerHealth").textContent = `Health:  ${playerHealthJS}`;
    document.getElementById("damageToPlayer").textContent = `Drunk cowboy did  ${damageToPlayer} damage!`;
    winner();
}, cowboyDelay);


});

// melee attack set up
var melee_attack = document.querySelector(".melee");
melee_attack.addEventListener("click", () =>{
//Everything in this function runs when this button is clicked 
var damageToCowboy = 0;
var damageToPlayer = cowboyPower(); 
var playerDelay = 3000;
var cowboyDelay = 3000;
const critHit = criticalDamage();

if(playerType === "melee"){
    playerDelay = 0;
    console.log("You smacked first");
    cowboyDelay = 3000;
    
}
else {
    var randomStart = Math.random();
    if(randomStart <= 0.5) {
        playerDelay = 0;
        console.log("You start!"); 
        cowboyDelay = 3000;
    }
    else {
        playerDelay = 3000;
        cowboyDelay = 0;
        console.log("oh, he starts");
    }
}
// step 7 
if(cowboyType === "melee") 
    damangeToCowboy = Math.floor(Math.random() * 45) + 44;
else if (cowboyType === "defensive")
    damageToCowboy = Math.floor(Math.random() * 50) + 94;
else    
    damageToCowboy = Math.floor(Math.random() * 30) + 9;

if(critHit === 1) damageToCowboy *= 1.35;
else if (critHit === 2) damageToPlayer *= 1.35;
else if (critHit === null) damageToCowboy = 0;

damageToCowboy = Math.floor(damageToCowboy);
damageToPlayer = Math.floor(damageToPlayer);

// step 8 turn basing
setTimeout(() => {
    console.log("Shove that burrito up there! Do it! With a sword too!");
    document.querySelector(".player").src = "player-melee.gif";
    cowboyHealthJS -= damageToCowboy;
    document.getElementById("cowboyHealth").textContent = `Health:  ${cowboyHealthJS}`;
    document.getElementById("damageToCowboy").textContent = `You did ${damageToCowboy} damage!`;
    winner();
}, playerDelay);

// step 9
setTimeout(() => {
    console.log("The Cowboy smacks you in the face!");
    playerHealthJS -= damageToPlayer;
    document.getElementById("playerHealth").textContent = `Health:  ${playerHealthJS}`;
    document.getElementById("damageToPlayer").textContent = `Drunk cowboy did  ${damageToPlayer} damage!`;
    winner();
}, cowboyDelay);


});

// defensive attack set up
var defensive_attack = document.querySelector(".defense");
defensive_attack.addEventListener("click", () =>{
//Everything in this function runs when this button is clicked 
var damageToCowboy = 0;
var damageToPlayer = cowboyPower(); 
var playerDelay = 3000;
var cowboyDelay = 3000;
const critHit = criticalDamage();

if(playerType === "defensive"){
    playerDelay = 0;
    console.log("You smacked first");
    cowboyDelay = 3000;
    
}
else {
    var randomStart = Math.random();
    if(randomStart <= 0.5) {
        playerDelay = 0;
        console.log("You start!"); 
        cowboyDelay = 3000;
    }
    else {
        playerDelay = 3000;
        cowboyDelay = 0;
        console.log("oh, he starts");
    }
}
// step 7 
if(cowboyType === "defensive") 
    damangeToCowboy = Math.floor(Math.random() * 45) + 44;
else if (cowboyType === "ranged")
    damageToCowboy = Math.floor(Math.random() * 50) + 94;
else    
    damageToCowboy = Math.floor(Math.random() * 30) + 9;

if(critHit === 1) damageToCowboy *= 1.35;
else if (critHit === 2) damageToPlayer *= 1.35;
else if (critHit === null) damageToCowboy = 0;

damageToCowboy = Math.floor(damageToCowboy);
damageToPlayer = Math.floor(damageToPlayer);

// step 8 turn basing
setTimeout(() => {
    console.log("SMACK HIM! SMACK HIM WITH THAT SHIELD!");
    document.querySelector(".player").src = "player-defense.gif";
    cowboyHealthJS -= damageToCowboy;
    document.getElementById("cowboyHealth").textContent = `Health:  ${cowboyHealthJS}`;
    document.getElementById("damageToCowboy").textContent = `You did ${damageToCowboy} damage!`;
    winner();
}, playerDelay);

// step 9
setTimeout(() => {
    console.log("The Cowboy smacks you in the face!");
    playerHealthJS -= damageToPlayer;
    document.getElementById("playerHealth").textContent = `Health:  ${playerHealthJS}`;
    document.getElementById("damageToPlayer").textContent = `Drunk cowboy did  ${damageToPlayer} damage!`;
    winner();
}, cowboyDelay);


});