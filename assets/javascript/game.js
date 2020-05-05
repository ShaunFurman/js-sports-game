let teamoneshootButton = document.querySelector("#teamoneshootbutton"); 
let teamtwoshootButton = document.querySelector("#teamtwoshootbutton");
let resetbutton = document.querySelector("#resetbutton");  
let counter = document.querySelector("#teamone-numshots");
let counter2 = document.querySelector("#teamtwo-numshots");
let counter3 = document.querySelector("#num-resets");




teamoneshootButton.addEventListener("click", function() {
    console.log("+ button clicked");
    let newCounterValue = Number(counter.innerHTML) + 1;

counter.innerHTML = newCounterValue;
})
// document.getElementById("teamone-numgoals").innerHTML =
// Math.floor(Math.random() * 10);

//TWO

teamtwoshootButton.addEventListener("click", function() {
    console.log("+ button clicked");
    let newCounterValue = Number(counter2.innerHTML) + 1;

counter2.innerHTML = newCounterValue;
})
// document.getElementById("teamtwo-numgoals").innerHTML =
// Math.floor(Math.random() * 10);

//RESET

resetbutton.addEventListener("click", function() {
    console.log("+ button clicked");
    let newCounterValue = Number(counter3.innerHTML) + 1;
    let teamoneshootbutton; count= 0
    let teamtwoshootbutton; count= 0
counter3.innerHTML = newCounterValue;
})

