$(document).ready(function () {
    $('#clickable-row').click(function() {
        window.location = $(this).data("href");
    })

    $('#searchVasile').click(function() {
        window.location.href = "searchVasile.html";
    })
    
    $('#backToDoctorPage').click(function() {
        window.location.href = "/doctorPage";
    })
    
    $('#backToAllPatients').click(function() {
        window.location.href = "patientsList.html";
    })
})