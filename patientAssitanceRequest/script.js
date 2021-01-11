const confirmModal = document.getElementById('confirm-modal')
const myProblem = document.getElementById('my-problem');

function assistChat(){
    confirmModal.hidden=false;
   
}

particlesJS.load('particles-js', '../scripts/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});

function goBack(){
    window.location.href = "../patientPage/index.html";
}

function confirmRequest(){
    const prob = myProblem.value;
    localStorage.setItem('prob-name',prob);
    window.location.href = "./PatientAssitanceChat";
}

function cancelRequest(){
    confirmModal.hidden=true;
}