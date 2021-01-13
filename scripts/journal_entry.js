
function AddEntry(){
    var sympVal = document.getElementById("sympInput").value;
    var feelingVal = document.getElementById("feelingInput").value;
    var notesVal = document.getElementById("notesInput").value;

  
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '-' + dd + '-' + yyyy;
    localStorage.setItem('symptoms', sympVal);
    localStorage.setItem('feeling', feelingVal);
    localStorage.setItem('notes', notesVal);
    localStorage.setItem('todayDate', today);
    window.location.href = "/patientSymptomsJournal/symptoms_journal.html";
    RefreshTable();
}

function RefreshTable(){
    var table = document.getElementById("symptomsTable");
    var symptoms = localStorage.getItem('symptoms');
    var feeling = localStorage.getItem('feeling');
    var notes = localStorage.getItem('notes');
    var today = localStorage.getItem('todayDate', today);

    var row = table.insertRow(1);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    // Add some text to the new cells:
    cell1.innerHTML = `<tr> <td>${today}</td>`;
    cell2.innerHTML = `<td>${symptoms}</td>`;
    cell3.innerHTML = `<td>${notes}</td>`;
    cell4.innerHTML = `<td>${feeling}</td>`;
    cell5.innerHTML = `<td><button type="button" class="btn btn-outline-dark" onclick="deleteRow(this)">DELETE</button></button></td> </tr>`;

}


function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("symptomsTable").deleteRow(i);
  }

  
