$(document).ready(function () {
    $('#clickable-row').click(function() {
        window.location = $(this).data("href");
    })

    $('#searchVasile').click(function() {
        window.location.href = "searchVasile.html";
    })
    
    $('#backToNursePage').click(function() {
        window.location.href = "index.html";
    })
    
    $('#backToAllPatients').click(function() {
        window.location.href = "patientsList.html";
    })
})