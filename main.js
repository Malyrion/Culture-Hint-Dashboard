
  var gaugeElement=document.querySelector("gauge");
function setGaugeValue(gauge,value){

  if(value<0 || value>1){
    return;
  }
  document.getElementById("gauge__fill").style.transform = "rotate(${value/2}turn)";
}

setGaugeValue(gaugeElement,0.4);


function getGaugeValue(positive,negative){
  return(positive-negative*0.9);
}


function changeToMedia(){
var year=document.getElementById("years").value;
           if (year == "2020") {
                document.getElementById("positive").innerHTML = "40";
                document.getElementById("negative").innerHTML = "8";
                var number=200;
                document.getElementById("gauge__fill").style.transform = "rotate(240deg)";
           }if (year == "2019") {
                document.getElementById("positive").innerHTML = "48";
                document.getElementById("negative").innerHTML = "18";
                document.getElementById("gauge__fill").style.transform = "rotate(220.9deg)";
           }if(year=="General"){
                 document.getElementById("positive").innerHTML = "88";
                 document.getElementById("negative").innerHTML = "26";
                 document.getElementById("gauge__fill").style.transform = "rotate(228.9deg)";
           }


}


function changeToPress(){
  var year=document.getElementById("years").value;
  if (year == "2020") {
       document.getElementById("positive").innerHTML = "68";
       document.getElementById("negative").innerHTML = "15";
       document.getElementById("gauge__fill").style.transform = "rotate(237.5deg)";
  }if (year == "2019") {
       document.getElementById("positive").innerHTML = "50";
       document.getElementById("negative").innerHTML = "4";
       document.getElementById("gauge__fill").style.transform = "rotate(256.6deg)";
  }if(year=="General"){
        document.getElementById("positive").innerHTML = "118";
        document.getElementById("negative").innerHTML = "19";
        document.getElementById("gauge__fill").style.transform = "rotate(245deg)";
  }
}
