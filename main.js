let span = document.querySelector("span");
let birthDay = {
  day: 14,
  month: 2,
};


// get permission
let permission = Notification.permission;
if (permission === "granted") {
} else if (permission === "default") {
  requestAndShowPermission();
} else {
  requestAndShowPermission();
}

//send req
function requestAndShowPermission() {
  Notification.requestPermission(function (permission) {
    if (permission !== "granted") {
      requestAndShowPermission();
    }
  });
}


function run() {
  const today = new Date();
  let m = today.getMinutes();
  let d = today.getDate();
  let mo = today.getMonth();

  if (birthDay.day == d && birthDay.month == mo + 1 && m == 0) {
    showNotification();
  }

  setTimeout(run, 1000);
}

run();

//show Notification

function showNotification() {
  //  if(document.visibilityState === "visible") {
  //      return;
  //  }
  let title = "happy birth day miro";
  let icon = "./294799010_444416197574675_6699428907001267822_n.jpg"; //this is a large image may take more time to show notifiction, replace with small size icon
  let body =
    "i will love you for ever becuse you are the best girl in the world";

  let notification = new Notification(title, { body, icon });

  notification.onclick = () => {
    notification.close();
    window.parent.focus();
  };
}

//======================================================================================//
$(function() {
  $love = $('.heart');
  for( var i = 0; i < 4; i++) {
    $('.wrapper').append($love.clone()); 
  }
});
