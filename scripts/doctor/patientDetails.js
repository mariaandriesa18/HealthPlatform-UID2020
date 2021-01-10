$(document).ready(function() {
    $('#realTimeInfo').click(function() {
        window.location.href = "realTimeInfo.html";
    })
    
    $('#backToPatientsList').click(function() {
        window.location.href = "patientsList.html";
    })

    particlesJS.load('particles-js', '../scripts/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
    });
})