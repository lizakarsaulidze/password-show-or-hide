var passField = document.querySelector("input[type='password']"); 
var btn = document.querySelector("i"); 

btn.onclick = function() {
    if (passField.type === "password") {
        passField.type = "text";
    } else {
        passField.type = "password";
    }
};
