let permission = Notification.permission;
let span = document.querySelector("span");
let birthDay = {
  day: 10,
  month: 3,
};
console.log('fgd')
function run() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let d = today.getDate();
  let mo = today.getMonth();
  let y = today.getFullYear();


  if (birthDay.day == d && birthDay.month == mo+1 && m == 0 ) {
    span.innerHTML = 'Happy birth day miro';

    if (permission === "granted") {
      showNotification();
    } else if (permission === "default") {
      requestAndShowPermission();
    } else {
      alert("Use normal alert");
    }
  }

  setTimeout(run, 1000);
}

run()
function requestAndShowPermission() {
  Notification.requestPermission(function (permission) {
    if (permission === "granted") {
      showNotification();
    }
  });
}
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
