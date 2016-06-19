import jq from 'jquery';

export function handler() {

}

/*function createFinalList(objectArray) {
  // creating table Header with all the categories
  var tableHead = document.createElement("tr");
  for (category in objectArray[0]) {
    var currCategory = document.createElement("td");
    currCategory.innerHTML = category;
    tableHead.appendChild(currCategory);
  }
  document.getElementById("hackerTable").appendChild(tableHead);

  // Filling in table with each hacker's information
  for(object: objectArray){
    for (category in object) {
      var currCategory = document.createElement("td");
      currCategory.innerHTML = category;
      tableHead.appendChild(currCategory);
      currCategory = Object.keys(object)[0];
    }


  }


  for (i=0; i< objectArray.length; i++) {

  }
}*/

$(document).ready(function () {
        $.getJSON(url,function (objectArray) {
               ko.applyBindings({
                  teams: objectArray
               });
          }
        });

    });
