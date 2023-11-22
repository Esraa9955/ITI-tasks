var stdName = document.getElementById("stdName");
var age = document.getElementById("age");
var vName = document.getElementById("vName");
var vAge = document.getElementById("vAge");
var table = document.getElementById("myTableData");

var rowCount = 1;



function add() {



    if (stdName.value.length >= 3 && Number(age.value) > 18) {
        vName.classList.remove("validateName");
        vAge.classList.remove("validateName");
        vName.classList.add("checked");
        vAge.classList.add("checked");

        var row = document.createElement("tr");

        let stdText = document.createTextNode(stdName.value);
        let ageText = document.createTextNode(age.value);

        var cell1 = document.createElement("td");
        cell1.append(rowCount)
        row.append(cell1);

        var cell2 = document.createElement("td");
        cell2.append(stdText)
        row.append(cell2);

        var cell3 = document.createElement("td");
        cell3.append(ageText)
        row.append(cell3);

        var cell4 = document.createElement("td");
        cell4.innerHTML = '<input  type="button"  value ="Delete" class="editdelete" onClick="deleteRow()">';
        row.append(cell4);

        table.append(row);

        stdName.value = "";
        age.value = "";
        rowCount++;

    }

    else {
        vName.classList.remove("checked");
        vAge.classList.remove("checked");
        vName.classList.add("validateName");
        vAge.classList.add("validateName");
    }

}

window.onload = function () {

    stdName.focus();
    vName.classList.remove("validateName");
    vAge.classList.remove("validateName");
    vName.classList.add("checked");
    vAge.classList.add("checked");


}

stdName.onblur = function () {
    age.focus();
}

function deleteRow() {
   

}















