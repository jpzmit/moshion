//This module loads a 16X16 matrix to show the pressure

var rowVariable = ["row1", "row2","row3","row4", "row5","row6","row7", "row8","row9","row10", "row11","row12","row13","row14","row15","row16"];
var rowLength = rowVariable.length;
var colVariable = ["col1", "col2","col3","col4", "col5","col6","col7", "col8","col9","col10", "col11","col12","col13","col14","col15","col16"];
var colLength = colVariable.length;

var addRow = document.createDocumentFragment(); 
for (var i = 1; i < 9; i++) {
    rowtemp = document.createElement('div');
    rowtemp.className = 'd-flex flex-row justify-content-center';
    rowtemp.id = rowVariable[i];   
    for (j = 1; j < 9; j++) {
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
