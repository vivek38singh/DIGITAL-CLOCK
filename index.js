function clock() {
  let hrs = document.getElementById("hour");
  let mints = document.getElementById("minutes");
  let secnd = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  var now = new Date();
  var dnam = now.getDay();
  var mnth = now.getMonth();
  var dnum = now.getDate();
  var yr = now.getFullYear();

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];
  var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var id = ["dayname", "month", "daynum", "year"];
  var ans = [week[dnam], months[mnth], dnum, yr];
  var range = id.length;
  for (var i = 0; i < range; i++)
    document.getElementById(id[i]).firstChild.nodeValue = ans[i];

  var am = "AM"
  if (h > 12) {
    h = h - 12;
    var am = "PM"
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  hrs.innerHTML = h;
  mints.innerHTML = m;
  secnd.innerHTML = s;
  ampm.innerHTML = am;
}
var intr = setInterval(clock, 1000);
