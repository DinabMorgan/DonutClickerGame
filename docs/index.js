// create varabiles
// create functions
// add event listeners
let donutCount = 0;
let multiplier = 0;
let autoclicker = 0;
let multiplierCost = 10;
let multiDonut = 1.2;
let multiSpan = document.getElementById("multiSpan");
let dCount = document.getElementById("donutCount");
let autoText = document.getElementById("autoCost")
let gameInterval = undefined;
let autoDonutCost = 100;
let clickerCount = 0;


let image = document.getElementById("donut");
image.addEventListener("click", clickFunction);

function clickFunction() {
    donutCount++; //will need to incorp the multiplier in here as well
    updateDisplay();
    console.log(donutCount);

    if (multiplierCost >= 11) {
        donutCount *= multiDonut;

        updateDisplay();
    }
    // increase the count
    // display the count

}

let multi = document.getElementById("multiplier");
multi.addEventListener("click", donutMultiplier);


function donutMultiplier() {
    // once they hit 10 they can buy a multiplier
    //  need to make sure that 10 gets subtracted from the count
    // multiply by 10%
    if (donutCount >= multiplierCost) {
        donutCount -= multiplierCost;
        multiplierCost *= 1.10;
        updateDisplay();

    }

}


let auto = document.getElementById("autoclicker");
auto.addEventListener("click", donutAuto);


function donutAuto() {
    //once they hit 100 they can buy an auto clicker
    //need to subtract 100 from count 
    // need to have it run on its own
    if (donutCount >= autoDonutCost) {
        donutCount -= autoDonutCost;
        autoDonutCost *= 1.10;
        clickerCount++;
        updateDisplay();

        clearInterval(gameInterval);
        gameInterval = setInterval(clickFunction, 1000);

    }
}


function updateDisplay() {

    dCount.innerText = "Score:" + donutCount.toFixed(0);
    autoText.innerText = "Auto-Clicker Cost:" + autoDonutCost.toFixed(0);
    multiSpan.innerText = multiplierCost;
    countClicks.innerText = "Auto-Clicks Purchased: " + clickerCount;
    multi.disabled = donutCount < multiplierCost;
    auto.disabled = donutCount < autoDonutCost;
    // this is where I want to put all of my text
}

let stopGame = document.getElementById("stop");
stopGame.addEventListener("click", gameStop);

function gameStop() {
    donutCount = 0;
    clearInterval(gameInterval);
    multiplierCost = 10;
    clickerCount = 0;
    autoDonutCost = 100;
    updateDisplay();
}

let fred = document.getElementById("fred");
fred.addEventListener("click", fredpopout);

function fredpopout() {
    let fredpopout = document.createElement("p");
    fredpopout.innerText = "Fred had a dream. He had a dream about donuts. Living in C.Falls, he realized that there was a need for fun donuts, not your typical sprinkles. So he got to work! And soon became knowned for his unique and funky style of donuts.";
    fred.append(fredpopout);


}

let insp = document.getElementById("inspiration");
insp.addEventListener("click", inspire);

function inspire() {
    let inspire = document.createElement("p");
    inspire.innerText = " Our inspiration of this game came from Cookie Clicker! Want to play the game? Just click on this link:https://cookieclicker.games/";
    insp.append(inspire);

}

let about = document.getElementById("about");
about.addEventListener("click", aboutme);

function aboutme() {
    let aboutme = document.createElement("p");
    aboutme.innerText = "Dina Morgan resides in Northeast Ohio. She has always loved computers, and of course donuts. Get to know more about her! https://github.com/DinabMorgan & https://dinabmorgan.github.io/";
    about.append(aboutme);
}

