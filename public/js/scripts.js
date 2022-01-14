//This module loads a 16X16 matrix to show the pressure

var rowVariable = ["row1", "row2","row3","row4"];
var rowLength = rowVariable.length;
var colVariable = ["col1", "col2","col3","col4"];
var colLength = colVariable.length;

var addRow = document.createDocumentFragment(); 
for (var i = 1; i < 6; i++) {
    rowtemp = document.createElement('div');
    rowtemp.className = 'd-flex flex-row justify-content-center';
    rowtemp.id = rowVariable[i];   
    for (j = 1; j < 6; j++) {
        ElementTemp = document.createElement('div');
        ElementTemp.className = 'sensor align-items-center justify-content-center text-center';
        ElementTemp.id = "row"+ i + "col" + j;
        ElementTemp.innerHTML = "";
        rowtemp.appendChild(ElementTemp);
        console.log(ElementTemp);
    }
    addRow.appendChild(rowtemp);
}
document.body.appendChild(addRow);




//Refresh window function definition
function refreshPage(){
    window.location.reload();
} 
