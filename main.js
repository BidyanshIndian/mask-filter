mask_y = 0;
mask_x = 0;

function preload(){
    Mask = loadImage("https://i.postimg.cc/W4ffZFxt/Screenshot-2021-09-14-at-12-36-21-PM.png")
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialised");
}

function gotPoses(results){
    if(results.length>0){
    console.log(results);
    mask_x = results[0].pose.nose.x-160;
    mask_y = results[0].pose.nose.y-213;
    console.log("hair x - "+ hair_x);
    console.log("hair y - "+ hair_y);
    }
}


function draw(){
   image(video,0,0,300,300);
   image(mask,mask_x,mask_y,300,400)
}

function take_snapshot(){
    save("Your Filtered Image");
}
