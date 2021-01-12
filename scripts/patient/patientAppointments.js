const nextYear = new Date().getFullYear() + 1;

const myCalender = new CalendarPicker('#myCalendarWrapper', {
    min: new Date(),
     max: new Date(nextYear, 10) 
});

function NewAppointment(){
    var table = document.getElementById("myTable");

    var dateVal = document.getElementById("dateInput").value;
    var hourVal = document.getElementById("hourInput").value;
    var sympVal = document.getElementById("symptomsInput").value;

    var dtRegex = new RegExp("^([0]?[1-9]|[1-2]\\d|3[0-1])-(JAN|FEB|MAR|APR|MAY|JUN|JULY|AUG|SEP|OCT|NOV|DEC)-[1-2]\\d{3}$", 'i');
    
    alert(dtRegex.test(dateVal));
    
    var row = table.insertRow(1);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    // Add some text to the new cells:
    cell1.innerHTML = `<tr> <td>${dateVal}</td>`;
    cell2.innerHTML = `<td>${hourVal}</td>`;
    cell3.innerHTML = `<td>${sympVal}</td>`;
    cell4.innerHTML = `<td>Upcoming</td>`;
    cell5.innerHTML = `<td><button type="button" class="btn btn-outline-dark" onclick="deleteRow(this)">CANCEL</button></button></td> </tr>`;

    alert(myCalender.value)
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
  }

  