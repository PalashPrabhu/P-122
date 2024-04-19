x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
  img=loadImage("apple.png");
}

function setup() {
  canvas= createCanvas(900,600);
 
}



function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    if(content=="Apple"){
      x=Math.floor(Math.random() * 900);
      y=Math.floor(Math.random() * 600);
      draw_apple="set";
  }

}



function draw() {
  if(draw_apple == "set")
  {
    
    image(img,x,y,50,50);
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
