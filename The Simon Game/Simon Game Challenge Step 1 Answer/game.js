var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern = [];



$(".btn").click(function() {
    
    
    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    //console.log(userClickedPattern);
    playSound(userChosenColour);
    animate(userChosenColour);
    
});

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push[randomChosenColour];
    
    $("#"+ randomChosenColour).fadeOut(1000).fadeIn(1000).fadeOut(1000);

    playSound(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animate(currentColour) {
    $("#"+ currentColour).addClass("pressed");

    setTimeout(() => {
        $("#"+ currentColour).removeClass("pressed"); 
    }, 100);
}