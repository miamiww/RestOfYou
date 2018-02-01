var videoInput;
var ctracker;
var positions;
var positionsHistory= [];
var rightEyeHistory = [];
var leftEyeHistory = [];
var rightEyeTrack = [0,0];
var leftEyeTrack = [0,0];
var count = 0;

var browserSize = {
  browserWidth: window.innerWidth || document.body.clientWidth,
  browserHeight: window.innerHeight || document.body.clientHeight
}

let canvasSizeWidth = browserSize.browserWidth;
let canvasSizeHeight = browserSize.browserHeight;


function setup(){
  createCanvas(canvasSizeWidth,canvasSizeHeight);
  // background(200);
  videoInput = createCapture(VIDEO);
  videoInput.size(width,height);
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);
  textSize(16);
  videoInput.hide();
}

function draw(){
  // clear();
  image(videoInput,0,0, width, height);
  positions = ctracker.getCurrentPosition();
  // positionsHistory.push(positions);

  if(positions == false){

  } else{
    var rightEye = {
      x: positions[27][0],
      y: positions[27][1]
    }
    var leftEye = {
      x: positions[32][0],
      y: positions[32][1]
    }
    if([rightEye.x,rightEye.y] != rightEyeTrack){
      count++;
      alert("You moved! Stop moving! This is warning number " + count);
    } else {

    }
    rightEyeTrack = [rightEye.x,rightEye.y];
  }


  // for(var i = 0; i < positions.length; i++){
  //   text(i, positions[i][0],positions[i][1]);
  // }


}
