var randomNumber,randomNumber2;
var marks1=[];
var marks2=[];
var totalscore, totalscore2;
var finalscore
var prayer1 , prayer2

//function 1
 function roll1(){
   var randomNumber=Math.floor((Math.random()*6)+1);
  if (randomNumber!==1){
      marks1.push(randomNumber)
      var totalscore=marks1.reduce((a,b)=>a+b)
    }
    else{
      var totalscore=marks.length=0

    }

    if (totalscore>=100||finalscore>=100){
      alert("Hooray you are winner")
    }
    var prayer1=prompt("Name of the first prayer:")
    $(document).ready(function(){
        $("#randomResult").text(randomNumber)
        $("#totalresult").text(totalscore)
        $("#prayer1").text(prayer1)
    });

 }

function hold(){
  var totalscore= finalscore
}
// user interface

function roll2(){
  var randomNumber2=Math.floor((Math.random()*6)+1);
   if (randomNumber2!==1){
     marks2.push(randomNumber2)
     var totalscore2=marks2.reduce((a,b)=>a+b)
   }
   else{
     var totalscore=marks2.length=0

   }

   if (totalscore2>=100||finalscore>=100){
     alert("Hooray you are winner")
   }
   $(document).ready(function(){
       $("#randomResult2").text(randomNumber2)
       $("#totalresult2").text(totalscore2)
       $("#prayer2").text(prayer2)
   });

}
