$(document).ready(function() {
    $('#back').click(function() {
        window.location.href = "patientDetails.html";
    })

    particlesJS.load('particles-js', '../scripts/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
    });
})