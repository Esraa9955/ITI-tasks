var success=document.getElementById("success")
var error = document.getElementById("error");
success.addEventListener("click",showMessage1)
error.addEventListener("click",showMessage2)

function showMessage1(){
document.getElementsByClassName("result")[0].style.visibility="visible"
document.getElementById("head").innerText="Success"
document.getElementById("head").style.color="green"
document.getElementsByClassName("outer")[0].style.backgroundColor="green"
document.getElementsByTagName("img")[0].src="../images/true.jpg"
document.getElementsByTagName("h4")[0].innerText="This is a success Message"
document.getElementsByTagName("h4")[0].style.color="green"

}
function showMessage2(){
  document.getElementsByClassName("result")[0].style.visibility="visible"
document.getElementById("head").innerText="Error"
document.getElementById("head").style.color="red"
document.getElementsByClassName("outer")[0].style.backgroundColor="red"
document.getElementsByTagName("img")[0].src="../images/fals.jpg"
document.getElementsByTagName("h4")[0].innerText="This is an error Message"
document.getElementsByTagName("h4")[0].style.color="red"
}


