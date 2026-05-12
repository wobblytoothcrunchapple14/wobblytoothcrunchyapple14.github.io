var q1_a1 = document.getElementById("q1-a1");
var q1_a1 = document.getElementById("q1-a1");
var q1_a1 = document.getElementById("q1-a1");
var q1_a1 = document.getElementById("q1-a1");

var result = document.getElementById("result")
var submit_button document.getElementByID("submit-button");


var score_IKissedAGirl = 0;
var score_HotNCold = 0;
var score_ThinkingOfYou = 0;
var score_CaliforniaGurls = 0;
var score_TeenageDream = 0;
var score_Firework = 0;
var score_ET = 0;
var score_LastFridayNight = 0;
var score_TheOneThatGotAway = 0;
var score_PartOfMe = 0;
var score_WideAwake = 0;
var score_Peacock = 0;
var score_DressinUp = 0;
var score_Roar
var score_Unconditionally = 0;
var score_LegendaryLovers = 0;
var score_DarkHorse = 0;
var score_Birthday
var score_ChainedToTheRhythm = 0;
var score_SwishSwish = 0;
var score_SaveAsDraft = 0;
var score_Daisies = 0;
var score_NeverReallyOver = 0;
var score_CryAboutItLater = 0;
var score_Tucked = 0;
var score_HarleysInHawaii = 0;
var score_WomansWorld = 0;

function check_q1(){

    if(q1_a1.checked == true){
        result.innerHTML = "You chose answer 1";
    }
    else if (q1_a2.checked == true){
        result.innerHTML = "You chose answer 2";
    }
    else if (q1_a2.checked == true){
        result.innerHTML = "You chose answer 3";
    }
}

function check_q2(){

}

function calculate_result(){

}



submit_button.addEventListener("click", check_q1);