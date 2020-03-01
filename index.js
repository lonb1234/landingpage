

document.querySelector(".email").addEventListener("focus", newmail);
  function newmail(){
  event.target.value = "";
}

document.querySelector(".btn1").addEventListener("click", verify);
function verify(){
  if (document.querySelector(".email").value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    document.querySelector(".verify").innerHTML="Thank you for subscribing."
  }
  else{
    document.querySelector(".verify").innerHTML="Please use a valid e-mail."
}
}
