
var input =document.getElementById("input")
console.log(input.value)
function traffic(){
  console.log("hjkl")
 
  if (input.value === "1") {
    var divElement = document.getElementById("red");
    divElement.style.backgroundColor = "red";
    document.getElementsByTagName("h5")[0].style.color="red"

  } else if(input.value==="2"){
    var divElement = document.getElementById("yellow");
    divElement.style.backgroundColor = "yellow";
    document.getElementsByTagName("h5")[0].style.color="yellow"
  } else if (input.value==="3"){
    var divElement = document.getElementById("green");
    divElement.style.backgroundColor = "green";
    document.getElementsByTagName("h5")[0].style.color="green"
  }
}