var TagName = document.getElementById("inp4");
var className = document.getElementById("inp5");
var Id = document.getElementById("inp6");
var Name = document.getElementById("inp7");

var lastDiv = document.getElementById("lastDiv");


function showResult() {


    var numbersOfTags = document.getElementsByTagName(TagName.value).length;
    var numberOfClasses = document.getElementsByClassName(className.value).length;

    var IDfound = document.getElementById(Id.value);
    if (IDfound) { IDfound = "true"; }
    else { IDfound = "false"; }

    var nameNumbers = document.getElementsByName(Name.value).length;

    lastDiv.textContent = `${TagName.value}: ${numbersOfTags} , className: ${numberOfClasses} ,id: ${IDfound} ,name: ${nameNumbers}`;
}




