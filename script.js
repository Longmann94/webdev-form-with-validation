
function checkForm(){
  const first_pass = document.getElementById("pass").value;
  const second_pass = document.getElementById("pass_confirm").value;

  if(first_pass !== second_pass){
    //if both pass do NOT match
    //set the input to style as invalid
    document.getElementById("pass").setCustomValidity("Invalid field");
    document.getElementById("pass_confirm").setCustomValidity("Invalid field");
    //add display type to the error message div to show it
    document.getElementById("password-notmatched").style.display = "flex";
  }else {
    //if both pass are macthing
    //set the input to style to valid
    document.getElementById("pass").setCustomValidity("");
    document.getElementById("pass_confirm").setCustomValidity("");
    //add style to message div to hide it
    document.getElementById("password-notmatched").style.display = "none";

  }

}

window.addEventListener("keyup", checkForm);
