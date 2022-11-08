var status;
var canvas;
var video;
var objectDetector;
var input_value;

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400, 380);
    video.hide();
}

function draw() {
    image(video, 0, 0, 480, 380);
}

function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input_value = document.getElementById("input").value;
    console.log(input_value);
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}