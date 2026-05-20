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
var score_Roar = 0;
var score_Unconditionally = 0;
var score_LegendaryLovers = 0;
var score_DarkHorse = 0;
var score_Birthday = 0;
var score_ChainedToTheRhythm = 0;
var score_SwishSwish = 0;
var score_SaveAsDraft = 0;
var score_Daisies = 0;
var score_NeverReallyOver = 0;
var score_CryAboutItLater = 0;
var score_Tucked = 0;
var score_HarleysInHawaii = 0;
var score_WomansWorld = 0;

const results = { score_Birthday, score_IKissedAGirl, score_HotNCold, score_ThinkingOfYou, score_CaliforniaGurls, score_TeenageDream, score_Firework, score_ET, score_LastFridayNight, score_TheOneThatGotAway, score_PartOfMe, score_WideAwake, score_Peacock, score_DressinUp, score_Roar, score_Unconditionally, score_LegendaryLovers, score_DarkHorse, score_ChainedToTheRhythm, score_SwishSwish, score_SaveAsDraft, score_Daisies, score_NeverReallyOver, score_CryAboutItLater, score_Tucked, score_HarleysInHawaii, score_WomansWorld }

function check_q1() {

    if (q1_a1.checked == true) {
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
    else if (q1_a2.checked == true) {
        score_ThinkingOfYou = score_ThinkingOfYou + 1;
        score_TheOneThatGotAway = score_TheOneThatGotAway + 1;
        score_SaveAsDraft = score_SaveAsDraft + 1;
        score_ChainedToTheRhythm = score_ChainedToTheRhythm + 1;
    }
    else if (q1_a3.checked == true) {
        score_CaliforniaGurls = score_CaliforniaGurls + 1;
        score_LastFridayNight = score_LastFridayNight + 1;
        score_Birthday = score_Birthday + 1;
        score_SwishSwish = SwishSwish + 1;
        score_NeverReallyOver = NeverReallyOver + 1;

    }
    else if (q1_a4.checked == true) {
        score_PartOfMe = score_PartOfMe + 1;
        score_WideAwake = score_WideAwake + 1;
        score_WomansWorld = score_WomansWorld + 1;
        score_Roar = score_Roar + 1;
        score_CryAboutItLater = score_CryAboutItLater + 1;
        score_Daisies = score_Daisies + 1;
        score_Firework = score_Firework + 1;
        score_NeverReallyOver = score_NeverReallyOver = +1;


    }
    check_q2();
}

function check_q2() {
    if (q2_a1.checked == true) {
        score_CaliforniaGurls = score_CaliforniaGurls + 1;
        score_CryAboutItLater = score_CryAboutItLater + 1;
        score_Unconditionally = score_Unconditionally + 1;
        score_Roar = score_Roar + 1;
        score_Peacock = score_Peacock + 1;
        score_Daisies = score_Daisies + 1;
    }

    else if (q2_a2.checked == true) {
        score_IKissedAGirl = score_IKissedAGirl + 1;
        score_CryAboutItLater = score_CryAboutItLater + 1;
        score_SwishSwish = score_SwishSwish + 1;
        score_Unconditionally = score_Unconditionally + 1;
        score_DarkHorse = score_DarkHorse + 1;
        score_Roar = score_Roar + 1;
    }
    else if (q2_a3.checked == true) {
        score_IKissedAGirl = score_IKissedAGirl + 1;
        score_CryAboutItLater = scoreCryAboutItLater + 1;
        score_DressinUp = score_DressinUp + 1;
        score_Tucked + 1;
        score_Unconditionally = score_Unconditionally + 1;
    }
    else if (q2_a4.checked == true) {
        score_LegendaryLovers = score_LegendaryLovers + 1;
        score_ChainedToTheRhythym + 1;
        score_CaliforniaGurls = score_CaliforniaGurls + 1;
        score_TheOneThatGotAway = score_TheOneThatGotAway + 1;
        score_Unconditionally = score_Unconditionally + 1;
        score_ThinkingOfYou = score_ThinkingOfYou + 1;
        score_DarkHorse = score_DarkHorse + 1;
        score_Peacock = score_Peacock + 1;
        score_HarleysInHawaii = score_HarleysInHawaii + 1;

    }
    else if (q2_a5.checked == true) {
        score_HotNCold = score_HotNCold + 1;
        score_Unconditionally = score_Unconditionally + 1;
        score_TeenageDream = score_TeenageDream + 1;
        score_SaveAsDraft = score_SaveAsDraft + 1;

    }

}
function check_q3() {
    if (q3_a1.checked == true) {
        score_HarleysInHawaii = score_HarleysInHawaii + 1;
        score_Roar = score_Roar + 1;
        score_LegendaryLovers = score_LegendaryLovers + 1;
        score_Unconditionally = score_Unconditionally + 1;
        score_WideAwake = score_WideAwake + 1;
        score_TeenageDream = score_TeenageDream + 1;
        score_Daisies = score_Daisies + 1;
        score_SaveAsDraft = score_SaveAsDraft + 1;
        score_TheOneThatGotAway = score_TheOneThatGotAway + 1;
    }
    else if (q3_a2.checked == true) {
        score_DarkHorse = score_DarkHorse + 1;
        score_ChainedToTheRhythym + 1;
        score_SwishSwish + 1;

    }
    else if (q3_a3.checked == true) {
        score_IKissedAGirl = score_IKissedAGirl + 1;
        score_HotNCold = score_HotNCold + 1;
        score_ThinkingOfYou = score_ThinkingOfYou + 1;
        score_DressinUp = score_DressinUp + 1;
    }
    else if (q3_a4.checked == true) {
        score_ET = score_ET + 1;
        score_CaliforniaGurls = score_CaliforniaGurls + 1;
        score_LastFridayNight = score_LastFridayNight + 1;
        score_Firework = score_Firework + 1;
        score_PartOfMe = score_PartOfMe + 1;
    }

}
function check_q4() {
    if (q4_a1.checked == true) {
        score_TeenageDream = score_TeenageDream + 1;
        score_Tucked = score_Tucked + 1;
        score_ET = score_ET + 1;
        score_DressinUp = score_DressinUp + 1;
        score_Unconditionally = score_Unconditionally + 1;
    }
    else if (q4_a2.checked == true) {
        score_TheOneThatGotAway = score_TheOneThatAway + 1;
        score_Daisies = score_Daisies + 1;
    }
    else if (q4_a3.checked == true) {
        score_SaveAsDraft = score_SaveAsDraft + 1;
        score_ThinkingOfYou = score_SaveAsDraft + 1;
        score_HotNCold = score_HotNCold + 1;
        score_IKissedAGirl = score_IKissedAGirl + 1;
        score_SwishSwish = score_SwishSwish + 1;
        score_CryAboutItLater = CryAboutItLater + 1;
        score_LastFridayNight = score_LastFridayNight + 1;
    }
    else if (q4_a4.checked == true) {
        score_WomansWorld = score_WomansWorld + 1;
        score_DarkHorse = score_DarkHorse + 1;
    }

}
function calculate_result() {

    let maxKey = "";
    let maxValue = -Infinity;

    for (const [key, value] of Object.entries(results)) {
        if (value > maxValue) {
            maxValue = value;
            maxKey = key;
        }
    }
var result = document.getElementById("q1-a1");
    if (maxKey == "score_birthday") {
getElementByID.result
    }
    if (maxKey == "score_IKissedAGirl") {

    }
    if (maxKey == "score_HotNCold") {

    }
    if (maxKey == "score_ThinkingOfYou") {

    }
    if (maxKey == "score_ThinkingOfYou") {

    }
    if (maxKey == "score_CaliforniaGurls") {

    }
    if (maxKey == "score_TeenageDream") {

    }
    if (maxKey == "score_Firework") {

    }
    if (maxKey == "score_ET") {

    }
    if (maxKey == "score_LastFridayNights") {

    }
    if (maxKey == "score_TheOneThatGotAway") {

    }
    if (maxKey == "score_PartOfMe") {

    }
    if (maxKey == "score_WideAwake") {

    }
    if (maxKey == "score_Peacock") {

    }
    if (maxKey == "score_DressinUp") {

    }
    if (maxKey == "score_Roar") {

    }
    if (maxKey == "score_LegendaryLovers") {

    }
    if (maxKey == "score_Unconditionally") {

    }
    if (maxKey == "score_ChainedToTheRhythym") {

    }
    if (maxKey == "score_SwishSwish") {

    }
    if (maxKey == "score_SaveAsDraft") {

    }
    if (maxKey == "score_Daisies") {

    }
    if (maxKey == "score_HarleysInHawaii") {

    }
    if (maxKey == "score_Tucked") {

    }
    if (maxKey == "score_CryAboutItLater") {

    }
    if (maxKey == "score_WomansWorld") {

    }

}

submit_button.addEventListener("click", check_q1);