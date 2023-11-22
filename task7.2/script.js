var images=["../images/1.jpg","../images/2.jpg","../images/3.jpg","../images/4.jpg","../images/5.jpg"]
var currentIndex = 0;

var element =document.getElementById("prevBtn");
function show1(){
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("sliderImage").src = images[currentIndex];
  element.setAttribute("src","../images/2.jpg")
}
var img2 =document.getElementById("nextBtn")
function show2(){
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("sliderImage").src = images[currentIndex];

}





