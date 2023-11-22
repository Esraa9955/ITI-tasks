var btn =document.getElementById("btn")
var outputMassage =document.getElementById("outputMassage");

var newPage;

function openWindow(){
   newPage=window.open("newTab.html","","width=400px height=200px")
}
btn.addEventListener("click",openWindow)

var massage=document.getElementById("massage");
  var str =massage.innerText;
  
var index =0;
btn.addEventListener("click",function(){
  displaMassage(index);
});

 function displaMassage(index){
  if(index<str.length){
    newPage.document.write(str.charAt(index))
    index++;
    setTimeout(function (){
      displaMassage(index);
    
  },100);

  }
  else{
    setTimeout(function(){
      newPage.close();
    },1000)
  }
 
 }

 /*var myInterval;
  for(var i=0;i<str.length;i++){
    myInterval=setInterval(function(){
     newPage.document.getElementById("outputMassage").write(str)

   },1000)
  
  }
  setTimeout(function() {
    clearInterval("myInterval")
  },
  5000)
  


btn.addEventListener("click",openWindow)


var str = "your massage will be displayed by chorome"


var myInterval;
function displaMassage (){
  for(var i =0; i<str.length;i++){
    myInterval=setInterval(function(){
      console.log(str[i]);
    },1000
    )

  }
}*/
