const newMessage = document.getElementById('newMessage');
const chatScreen =document.getElementById('chat-screen')



function sendMessage(){

    const messageVal = newMessage.value;

    console.log(messageVal);

    let template = `
    <div class="chat-message">
        <h6>Me</h6>
        <p class="chat-content">${messageVal}</p>
        <p class="send-data">${new Date().toLocaleString()}</p>
    </div>
    `;

    let node=  document.createElement("div");
    node.classList.add('chat-right');
    node.innerHTML=template;

    newMessage.value="";

    chatScreen.appendChild(node);

    chatScreen.scrollBy(0,10000);

}



particlesJS.load('particles-js', '../../scripts/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});