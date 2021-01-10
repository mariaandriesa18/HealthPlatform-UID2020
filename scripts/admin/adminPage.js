$(document).ready(function () {
    $('#backToAdminPage').click(function() {
        window.location.href = "/adminPage";
    })

    $('#patientsListOption').click(function() {
        window.location.href = "/adminPage/patientsList.html";
    })

    $('#usersListOption').click(function() {
        window.location.href = "/adminPage/usersList.html";
    })

    particlesJS.load('particles-js', '../scripts/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
    });
})