const notifications = document.getElementsByClassName('notification-item');
const notCancel = document.getElementById('notification-cancel');
const notText = document.getElementById('notification-text');
const notTopItem = document.getElementById('not-top-item');

let notificationNr=2;
let startState =0;

function setNotificationScreen(){
    



    if(startState==0&& notificationNr!=0){
        [].forEach.call(notifications, function (element) {
            element.hidden=false;
        });
        
        notCancel.hidden = false;
        notText.innerHTML='Cancel'
        startState=1;
        notTopItem.style.backgroundColor='black'
    
    }else{
        [].forEach.call(notifications, function (element) {
            element.hidden=true;
        });
        notCancel.hidden = true;
        notText.innerHTML='Notifications'
        startState=0;
        
        if(notificationNr!=0){
            notTopItem.style.backgroundColor='#e67e00'
        }
    }
   
}


function deleteEl(el){
   el.remove();
   notificationNr--;

   if(notificationNr==0){
    [].forEach.call(notifications, function (element) {
        element.hidden=true;
    });
    notCancel.hidden = true;
    notText.innerHTML='Notifications'
    startState=0;

    notTopItem.style.backgroundColor='black'

   }

   

   
}

notTopItem.style.backgroundColor='#e67e00'
