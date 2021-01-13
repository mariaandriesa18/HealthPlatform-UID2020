function send_message(){
    document.getElementById("chat_id").hidden = true;
}

$(document).ready(function() {
    $('#backToNursePage').click(function() {
        window.location.href = "/nursePage";
    })
})