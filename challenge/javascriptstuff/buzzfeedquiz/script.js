var q1_a1 = document.getElementById("q1-a1");
var q1_a1 = document.getElementById("q1-a1");
var q1_a1 = document.getElementById("q1-a1");
var q1_a1 = document.getElementById("q1-a1");

var result = document.getElementById("result")
var submit_button = document.getElementByID("submit-button");


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
       score_IKissedAGIrl = score_IKissedAGirl + 1;
       score_TeenageDream = score_TeenageDream + 1;
       score_ET = score_ET + 1;
       score_LegendaryLovers = score_LegendaryLovers + 1;
       score_Birthday = score_Birthday + 1;
       score_Tucked = score_Tucked + 1;
       score_HarleysInHawaii = score_HarleysInHawaii + 1;
       score_CryAboutItLater = score_CryAboutItLater + 1;
       score_DressinUp = score_DressinUp + 1;
       score_Peacock = score_Peacock + 1;
       score_Unconditionally = score_Unconditionally + 1;
    
    }
    else if (q1_a2.checked == true){
       score_ThinkingOfYou = score_ThinkingOfYou + 1;
       score_TheOneThatGotAway = score_TheOneThatGotAway + 1;
       score_SaveAsDraft = score_SaveAsDraft + 1;
       score_ChainedToTheRhythm = score_ChainedToTheRhythm + 1;
    }
    else if (q1_a3.checked == true){
        score_CaliforniaGurls = score_CaliforniaGurls + 1
    }
    else if (q1_a4.checked == true){
        score_ = score_ + 1
    }
}

function check_q2(){

}
function check_q3(){

}
function check_q4(){

}
function check_q5(){

}
function check_q6(){

}
function check_q7(){

}
function check_q8(){

}
function check_q9(){

}
function check_q10(){

}
function check_q11(){

}

function calculate_result(){

}



submit_button.addEventListener("click", check_q1);