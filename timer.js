var second=0;

var myinterval;


 function saniye(){
    console.log("saniye");
    second=second+1;
    console.log(second); 
    document.getElementById("saniye").innerHTML=second;
  }

 function baslat(){
    console.log("baslat");
   myinterval = setInterval(saniye,1000);
 }  

 function duraklat(){
myinterval=clearInterval(myinterval);
 }

function Stop(){
    myinterval=clearInterval(myinterval)
    second=00;
    document.getElementById("saniye").innerHTML=second;
}

 

