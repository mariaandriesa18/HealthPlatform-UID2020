const confirmModal= document.getElementById('confirm-modal')


function confirmNewAppoinment(){
    confirmModal.hidden=false;
}

function NewAppointment(){
    document.getElementById("wrongDate").style.visibility = "hidden";
    var table = document.getElementById("list");

    var dateVal = document.getElementById("dateInput").value;
    var hourVal = document.getElementById("hourInput").value;
    var sympVal = document.getElementById("symptomsInput").value;

    var dtRegex = new RegExp("^([0]?[1-9]|[1-2]\\d|3[0-1])-(JAN|FEB|MAR|APR|MAY|JUN|JULY|AUG|SEP|OCT|NOV|DEC)-[1-2]\\d{3}$", 'i');
    
    if( dtRegex.test(dateVal) == false ){
        document.getElementById("wrongDate").style.visibility = "visible";
        document.getElementById("dateInput").value = "";
        document.getElementById("hourInput").value = "";
        document.getElementById("symptomsInput").value = "";
    }else{
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
    
    }
    
   
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("list").deleteRow(i);
  }

  
function cancelRequest(){
    confirmModal.hidden=true;
}

function confirmRequest(){
    NewAppointment();
    confirmModal.hidden=true;
}


function assistChat(){
    confirmModal.hidden=false;
   
}


particlesJS.load('particles-js', '../scripts/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});