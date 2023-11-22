/**
 * innetrText only accepts text
 * innerHTML  accepts tags
 * textContent (search)
 */

var element1 = document.getElementById("result")
//function changeContent(){
//  console.log(element1.innerText) //get
//  element1.innerHTML="<h1>Welcome Python track</h1>";  //set
//}

var element2 =document.getElementsByClassName("myp")[0];


function changeContent(){
  element1.innerText =element2.innerText;
}

var element3 =document.getElementById("input1")
var element4 = document.getElementById("output");

function getInput(){
  console.log(element4)
  element4.innerHTML +=element3.value;
}

var element5 =document.getElementsByName("choose");
function showAnswer(){

 for(var i=0; i<element5.length;i++){
    if(element5[i].checked){
      element4.innerHTML=element5[i].value;
    }
 }
 element4.style.display ="block";
}
var element6 = document.getElementById("content")
//function changeStyle()
//{
// style object  
//  element6.style.background ="#6d6a9b";
//  element6.style.padding ="40px";
//  element6.style.color = "#fff"
//}
//function changeStyle()
//{
  //class Name
//  console.log(content.className)
//  content.className +=" jsClass"
//}
function changeStyle(){
  //class list
  //console.log(content.classList[0]);
  //content.classList .add("jsClass")
  //console.log(content.classList);
  //content.classList.remove("parent")
  //console.log(content.classList);
  content.classList.toggle("jsClass")
}
var element7 =document.links
function getAtt(){
  //console.log(element7[0].attributes)
  //element7[0].setAttribute('href',"https://www.google.com.eg")
 //for(var i=0; i<element7.length;i++){
  //console.log(element7[i].getAttribute("id"))
 //}
 console.log(element7[0].getAttribute("class"))
 element7[0].setAttribute("class","jsClass")
}