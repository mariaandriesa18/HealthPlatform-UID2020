

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

    particlesJS.load('particles-js', '../scripts/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
    });
})