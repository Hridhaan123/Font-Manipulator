function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);
}

function modelloaded() {
    console.log("PoseNet is Initialized!");
}

function draw() {
    background('grey')
}

function gotposes(results) {
    if (results.length>0) {
        console.log(results);
    }
}