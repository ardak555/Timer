var second = 0;

var myinterval;


function saniye() {
  second =second + 1;
  if (second < 10) {
    document.getElementById("saniye").innerHTML = "0" + second;
  }
  else{
    document.getElementById("saniye").innerHTML=second;
  }

}

function baslat() {
  console.log("baslat");
  myinterval = setInterval(saniye, 1000);
  document.getElementById("saniye").classList.remove("shine");
}

function duraklat() {
  myinterval = clearInterval(myinterval);
  document.getElementById("saniye").classList.add("shine");
}

function Stop() {
  document.getElementById("saniye").classList.remove("shine");
  myinterval = clearInterval(myinterval)
  second = "--";
  document.getElementById("saniye").innerHTML = second;
}



