liftrix = 0;
liftrey = 0;
difference = 0;

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
    background('white');
    fill('aquamarine');
    text("Hridhaan", 100, 400);
    textSize(difference);

}

function gotposes(results) {
    if (results.length>0) {
        console.log(results);
        liftrix = results[0].pose.leftWrist.x;
        liftrey = results[0].pose.rightWrist.x;
        difference = floor(liftrix - liftrey);
    }
}