
$(document).ready(function() {

    $('#submitBtn').click(function() {
        window.location.href = "./index.html";
    })


    $('#backBtn').click(function() {
      
        window.location.href = "./index.html";
    })


    particlesJS.load('particles-js', '../scripts/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
    });
})