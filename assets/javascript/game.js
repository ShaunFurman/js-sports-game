function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }
random_bg_color();

let teamoneshootButton = document.querySelector("#teamoneshootbutton"); 
let teamtwoshootButton = document.querySelector("#teamtwoshootbutton");
    let teamonegoals = document.querySelector("#teamone-numgoals");
    let teamtwogoals = document.querySelector("#teamtwo-numgoals");
let counter1 = document.querySelector("#teamone-numshots");
let counter2 = document.querySelector("#teamtwo-numshots");
let counter3 = document.querySelector("#num-resets");
    let resetbutton = document.querySelector("#reset-button"); 



teamoneshootButton.addEventListener("click", function() {
    console.log("+ button clicked");
    let newCounterValue = Number(counter1.innerHTML) + 1;
    counter1.innerHTML = newCounterValue
    
    if (Math.random() > .5) {
        let newGoals = Number(teamonegoals.innerHTML) + 1
        teamonegoals.innerHTML = newGoals
      }
            console.log("+ Random number");

})
// if (counter1 = 10) {
//     let teamoneshootButton = teamoneshootButton.innerHTML = "GAME OVER";
//         // console.log("GAME OVER")
// }
//TWO

teamtwoshootButton.addEventListener("click", function() {
    console.log("+ button clicked");
    let newCounterValue = Number(counter2.innerHTML) + 1;
    counter2.innerHTML = newCounterValue;
// if random chance suceed then increment GOALS like SHOTS 
  if (Math.random() > .5) {
    let newGoals = Number(teamtwogoals.innerHTML) + 1
    teamtwogoals.innerHTML = newGoals
  }
        console.log("+ Random number");
    //----------------> new 5/10/20
})

//RESET

resetbutton.addEventListener("click", function() {
    console.log("+ reset clicked");

    let newCounterValue = Number(counter3.innerHTML) + 1;
    counter3.innerHTML = newCounterValue;
    counter1.innerHTML = 0;
    counter2.innerHTML = 0;
    teamonegoals.innerHTML = 0;
    teamtwogoals.innerHTML = 0;
})