function preload(){
moust=loadImage("https://i.postimg.cc/PNsS3tjG/moustache-removebg-preview.png");
hatter=loadImage("https://i.postimg.cc/qBX6zJN9/blue-hat-removebg-preview.png");
}

function setup(){
    place=createCanvas(350,350);
    place.position(450,300);
    snap=createCapture(VIDEO);
    snap.hide();
    poseNet=ml5.poseNet(snap,modeloaded);
    poseNet.on("pose",getresult);
}

function draw(){
    image(snap,0,0,350,350);
    image(moust,noseX,noseY,50,40);
    
    image(hatter,hatX,hatY,120,98);
}


function modeloaded(){
    console.log("PoseNet is loaded");
 }

noseX=0;
noseY=0;
hatX=0;
hatY=0;
function getresult(result){
    if(result.length>0){
        console.log(result);
        noseX=result[0].pose.nose.x-192;
        noseY=result[0].pose.nose.y-70;
      console.log( "x position="+result[0].pose.nose.x);
       console.log( "y position="+result[0].pose.nose.y);
       hatX=result[0].pose.leftEar.x-300;
       hatY=result[0].pose.leftEar.y-230;
     console.log( "x_ position="+result[0].pose.leftEar.x);
      console.log( "y_ position="+result[0].pose.leftEar.y);
    }
    
}



 
function take_snapshot(){
    save("filter.png");
    
  }
  