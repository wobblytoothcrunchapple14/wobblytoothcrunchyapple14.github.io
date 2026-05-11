username_text = document.getElementById("username-entry");
password_text = document.getElementById("password-entry");
submit_button = document.getElementById("submit-button");
status_text = document.getElementById("status-text");


function checkCredentials(){
    if (username_entry.value == "admin" && password_entry.value =="admin"){
        status_text.innerHTML = "ACCESS GRANTED";
        status_text.style.color = "limegreen";
} 

    else{
        status_text.innerHTML = "ACCESS DENIED";
        status_text.style.color = "red";
    }
}

submit_button.addEventListener("click", checkCredentials);