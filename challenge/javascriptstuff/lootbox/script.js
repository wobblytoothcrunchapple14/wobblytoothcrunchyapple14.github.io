var lootbox = document.getElementById("lootbox")

var common = document.getElementsById("common")
var c_count = 0;

var uncommon =document.getElementById("uncommon")
var u_count = 0;

var rare = document.getElementById("rare");
var r_count = 0;

var legendary = document.getElementById("legendary")
var l_count = 0

var mythic = document.getElementById("mythic");
var m_count = 0;

function rollootbox(){
    number = Math.floor(Math.random() * 100);

 if (number < 50) {
        lootBox.innerHTML = "COMMON";
        lootBox.style.backgroundColor ="white";
        c_count = c_count + 1;
        common.innerHTML = c_count;
}

    else if (number < 75) {
    lootBox.innerHTML = "UNCOMMON";
    lootBox.style.backgroundColor = "blue";
    u_count = u_count + 1;
    uncommon.innerHTML = u_count;
}
    else if (number < 90) {
        lootBox.innerHTML = "RARE";
        lootBox.style.background = "gold"
        r_count = 
    }
