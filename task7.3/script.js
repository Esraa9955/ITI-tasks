var tagName = document.getElementById("tagName")
var color = document.getElementById("color")
var text = document.getElementById("text")
var output =document.getElementById("output")
function creatElement(){
output.style.color=color.value;
var tag = document.createElement(tagName.value);
var Text =document.createTextNode(text.value)
tag.append(Text)
output.append(tag)
}