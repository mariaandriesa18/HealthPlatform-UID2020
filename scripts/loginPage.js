const userEmail = document.getElementById('inputEmail')
const userPassword = document.getElementById('inputPassword')
const errorMessage = document.getElementById('error-message-login')

function loginUser(){
    const myEmail = userEmail.value;
    const myPassword = userPassword.value;

    if(myEmail=='admin' && myPassword =='admin'){
        window.location.href = "../adminPage/index.html"
    }else if(myEmail=='doctor' && myPassword =='doctor'){
        window.location.href = "../doctorPage/index.html"
    }else if(myEmail=='patient' && myPassword =='patient'){
        window.location.href = "../patientPage/index.html"
    }else{
        errorMessage.hidden= false;
        console.log('aa')
    }

}

particlesJS.load('particles-js', '../../scripts/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
}); 