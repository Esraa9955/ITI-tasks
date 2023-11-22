var images=["../images/1.jpg","../images/2.jpg","../images/3.jpg","../images/4.jpg","../images/5.jpg"]
var currentIndex =0
var pervuse = document.getElementById("pervuse");
var next = document.getElementById("next");

function pervuseImage(){
pervuse = currentIndex=(currentIndex-1+images.length)%images.length
document.getElementById("img").src=images[currentIndex];

}
function nextImage(){
 next = currentIndex=(currentIndex+1+images.length)%images.length
 document.getElementById("img").src=images[currentIndex]
}

var play = document.getElementById("play");
var stop = document.getElementById("stop");

play.addEventListener("click",function(){
  playImage(index)
})

stop.addEventListener("click",stopImage)
var index=0 ;
var mytime;
function playImage(index){
  if(index<images.length)
  {
    document.getElementById("img").src=images[index]
    index=(index+1+images.length)%images.length
    mytime= setTimeout(function (){
      playImage(index);
    
  },1000);
  }
 
}
function stopImage(){
 
  setTimeout(function(){
    clearTimeout(mytime);
  },10)
}
