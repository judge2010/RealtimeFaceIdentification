function preload(){

};
function setup(){
canvas=createCanvas(250 ,250);
canvas.position(660,450)
video=createCapture(VIDEO);
video.hide();
console.log(ml5.version);   
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NvQrzZ3oy/model.json",modelloaded);
};
function draw(){
image(video,0,0,250,250) ;
classifier.classify(video,gotResult);
};
function modelloaded(){
console.log("model is loaded");
};
function gotResult(error,result){
if(error){
    console.log(error);
}
else{
    console.log(result);
    document.getElementById("object").innerHTML= "Person -  " + result[0].label;
    document.getElementById("acuracy").innerHTML= "Acuracy -  " + result[0].confidence.toFixed(3);
};
};