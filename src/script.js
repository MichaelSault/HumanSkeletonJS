//tranformation vars for X-axis
var moveX = 0.0;
var hipsX = 0.0;
var spineX = 0.0;
var spine1X = 0.0;
var leftShoulderX = 0.0;
var leftUpArmX = 0.0;
var leftLowArmX = 0.0;
var leftHandX = 0.0;
var leftThumbX = 0.0;
var leftUpLegX = 0.0;
var leftLowLegX = 0.0;
var leftFootX = 0.0;
var leftToeX = 0.0;
var rightShoulderX = 0.0;
var rightUpArmX = 0.0;
var rightLowArmX = 0.0;
var rightHandX = 0.0;
var rightThumbX = 0.0;
var rightUpLegX = 0.0;
var rightLowLegX = 0.0;
var rightFootX = 0.0;
var rightToeX = 0.0;
var neckX = 0.0;
var headX = 0.0;

//tranformation vars for Y-axis
var moveY = 0.0;
var hipsY = 0.0;
var spineY = 0.0;
var spine1Y = 0.0;
var leftShoulderY = 0.0;
var leftUpArmY = 0.0;
var leftLowArmY = 0.0;
var leftHandY = 0.0;
var leftThumbY = 0.0;
var leftUpLegY = 0.0;
var leftLowLegY = 0.0;
var leftFootY = 0.0;
var leftToeY = 0.0;
var rightShoulderY = 0.0;
var rightUpArmY = 0.0;
var rightLowArmY = 0.0;
var rightHandY = 0.0;
var rightThumbY = 0.0;
var rightUpLegY = 0.0;
var rightLowLegY = 0.0;
var rightFootY = 0.0;
var rightToeY = 0.0;
var neckY = 0.0;
var headY = 0.0;

//tranformation vars for Z-axis
var moveZ = 0.0;
var hipsZ = 0.0;
var spineZ = 0.0;
var spine1Z = 0.0;
var leftShoulderZ = 0.0;
var leftUpArmZ = 0.0;
var leftLowArmZ = 0.0;
var leftHandZ = 0.0;
var leftThumbZ = 0.0;
var leftUpLegZ = 0.0;
var leftLowLegZ = 0.0;
var leftFootZ = 0.0;
var leftToeZ = 0.0;
var rightShoulderZ = 0.0;
var rightUpArmZ = 0.0;
var rightLowArmZ = 0.0;
var rightHandZ = 0.0;
var rightThumbZ = 0.0;
var rightUpLegZ = 0.0;
var rightLowLegZ = 0.0;
var rightFootZ = 0.0;
var rightToeZ = 0.0;
var neckZ = 0.0;
var headZ = 0.0;

//frame counter
var frame = 0;

//camera vars
var cameraWidth = 0.0;
var cameraDepth = -600.0;
var cameraHeight = 400.0;

var rotCamX = 0.0;
var rotCamY = 0.0;

//vars used to parse .bvh file
var test = [];
var transArray = [];

var start = 0;
var frameNum = 0;
var moveArray = [];

var canRun = false;

//limb colours
var hipColour;
var spineColour;
var spine1Colour;
var leftShoulderColour;
var leftUpArmColour;
var leftLowArmColour;
var leftHandColour;
var leftThumbColour;
var leftUpLegColour;
var leftLowLegColour;
var leftFootColour;
var leftToeColour;
var rightShoulderColour;
var rightUpArmColour;
var rightLowArmColour;
var rightHandColour;
var rightThumbColour;
var rightUpLegColour;
var rightLowLegColour;
var rightFootColour;
var rightToeColour;
var neckColour;
var headColour;
var eyeColour;


//main setup function
function setup() {
	if (window.innerWidth >= 1280){
		createCanvas(1280, 720, WEBGL);
	} else if (window.innerWidth < 1280 && window.innerWidth >= 852) {
		createCanvas(852, 480, WEBGL);
	} else if (window.innerWidth < 852) {
		createCanvas(480, 360, WEBGL);
	} else console.log("Error");
	
	frameRate(9999);

	//generate limb colours
	hipColour = color(random(0,255), random(0,255), random(0,255));
	spineColour = color(random(0,255), random(0,255), random(0,255));
	spine1Colour = color(random(0,255), random(0,255), random(0,255));
	leftShoulderColour = color(random(0,255), random(0,255), random(0,255));
	leftUpArmColour = color(random(0,255), random(0,255), random(0,255));
	leftLowArmColour = color(random(0,255), random(0,255), random(0,255));
	leftHandColour = color(random(0,255), random(0,255), random(0,255));
	leftThumbColour = color(random(0,255), random(0,255), random(0,255));
	leftUpLegColour = color(random(0,255), random(0,255), random(0,255));
	leftLowLegColour = color(random(0,255), random(0,255), random(0,255));
	leftFootColour = color(random(0,255), random(0,255), random(0,255));
	leftToeColour = color(random(0,255), random(0,255), random(0,255));
	rightShoulderColour = color(random(0,255), random(0,255), random(0,255));
	rightUpArmColour = color(random(0,255), random(0,255), random(0,255));
	rightLowArmColour = color(random(0,255), random(0,255), random(0,255));
	rightHandColour = color(random(0,255), random(0,255), random(0,255));
	rightThumbColour = color(random(0,255), random(0,255), random(0,255));
	rightUpLegColour = color(random(0,255), random(0,255), random(0,255));
	rightLowLegColour = color(random(0,255), random(0,255), random(0,255));
	rightFootColour = color(random(0,255), random(0,255), random(0,255));
	rightToeColour = color(random(0,255), random(0,255), random(0,255));
	neckColour = color(random(0,255), random(0,255), random(0,255));
	headColour = color(random(0,255), random(0,255), random(0,255));
	eyeColour = color(random(0,255), random(0,255), random(0,255));
	floorColour = color(random(0,255), random(0,255), random(0,255));

}


//main draw function
function draw() {
    background(0);
    ambientLight(150);
    directionalLight(255, 255, 255, 0, 0, 1);

    if (frame < frameNum-1){  //iterate
		frame += 1;
	} else canRun = false;  //and then loop

    push();
    if (canRun == true) {
		getNextFrame(frame);

	  //=======================================================================
	  //ANIMATION MATRICIES
	  //=======================================================================
	  	push();
	  		translate(cameraWidth, cameraHeight, cameraDepth);
	  		//affects the entire skeleton as it is before any object is drawn
	  		rotateX(rotCamX);
	  		rotateY(rotCamY + 3.14159);
	  		fill(floorColour)
	  		box(5000, 10, 1500); //draws the floor

			//------------------------------------------
			//Spine --> Head
			//------------------------------------------
		    push();
		    	translate(-moveX*10, -moveY*10, -moveZ*10);
		    	rotateX(radians(hipsX));
				rotateY(radians(hipsY));
				rotateZ(radians(hipsZ));
				fill(hipColour);
				box(73, 15, 10); //draws hips (root)
				push();
					translate(0, -7.5, 0);
					rotateX(radians(spineX));
			        rotateY(radians(spineY));
			        rotateZ(radians(spineZ));
			        translate(0, -51.25, 0);
			        fill(spineColour);
			        box(10, 102.5, 10); //lower spine
			        push();
			            translate(0, -51.25, 0);
			            rotateX(radians(spine1X));
			            rotateY(radians(spine1Y));
			            rotateZ(radians(spine1Z));
			            translate(0, -39.15, 0);
			            fill(spine1Colour);
			            box(10, 78.3, 10); //upper spine
			            push();
			            	translate(0, -39.15, 0);
			            	rotateX(radians(neckX));
			            	rotateY(radians(neckY));
			            	rotateZ(radians(neckZ));
			            	translate(0, -34.55, 0);
			            	fill(neckColour);
			            	box(10, 69.1, 10);	//neck
			            	push();
			                	translate(0, -34.55, 0);
			                	rotateX(radians(headX));
			                	rotateY(radians(headY));
			                	rotateZ(radians(headZ));
			                	fill(headColour);
			                	sphere(40, 24, 24);	//head
			                	translate(15, -5, -30);
			                	fill(eyeColour);
			                	sphere(10, 15, 5);	//left eye
			                	translate(-30, 0, 0);
			                	fill(eyeColour);
			                	sphere(10, 15, 5);	//right eye
			              	pop();
			            pop();

			//------------------------------------------
			//Left Arm
			//------------------------------------------
			            push();
			            	translate(-5, -39.15, 0);
			            	rotateX(radians(leftShoulderX));
			            	rotateY(radians(leftShoulderY));
			            	rotateZ(radians(leftShoulderZ));
			            	translate(-33.55, 0, 0);
			            	fill(leftShoulderColour);
			            	box(-67.1, 15, 10);	//left shoulder
			            	push();
				                translate(-33.55, 0, 0);
				                rotateX(radians(leftUpArmX));
				                rotateY(radians(leftUpArmY));
				                rotateZ(radians(leftUpArmZ));
				                translate(-54.7, 0, 0);
				                fill(leftUpArmColour);
				                box(-109.4, 10, 10);	//left upper arm
			                	push();
					                translate(-54.7, 0, 0);
					                rotateX(radians(leftLowArmX));
					                rotateY(radians(leftLowArmY));
					                rotateZ(radians(leftLowArmZ));
					                translate(-42.6, 0, 0);
					                fill(leftLowArmColour);
					                box(-85.2, 10, 10);	//left lower arm
					                push();
					                    translate(-42.6, 0, 0);
					                    rotateX(radians(leftHandX));
					                    rotateY(radians(leftHandY));
					                    rotateZ(radians(leftHandZ));
					                    translate(-19.75, 0, 0);
					                    fill(leftHandColour);
					                    box(39.4, 10, 10);	//left hand
			                  		pop();
			                  		push();
			                    		translate(-42.6, 0, -2.5);
			                    		rotateX(radians(leftThumbX));
			                    		rotateY(radians(leftThumbY));
			                    		rotateZ(radians(leftThumbZ));
			                    		translate(0, 0, -12.5);
			                    		fill(leftThumbColour);
			                    		box(10, 10, 25);	//left thumb
			                  		pop();
			               		pop();
			              	pop();
			            pop();

			//------------------------------------------
	    	//Right Arm
	    	//------------------------------------------
			            push();
			            	translate(5, -39.15, 0);
			            	rotateX(radians(rightShoulderX));
			            	rotateY(radians(rightShoulderY));
			            	rotateZ(radians(rightShoulderZ));
			            	translate(33.55, 0, 0);
			            	fill(rightShoulderColour);
			            	box(67.1, 15, 10);	//right shoulder
			            	push();
			                	translate(33.55, 0, 0);
				                rotateX(radians(rightUpArmX));
				                rotateY(radians(rightUpArmY));
				                rotateZ(radians(rightUpArmZ));
				                translate(54.7, 0, 0);
				                fill(rightUpArmColour);
				                box(109.4, 10, 10);	//right up arm
				                push();
			                		translate(54.7, 0, 0);
					                rotateX(radians(rightLowArmX));
					                rotateY(radians(rightLowArmY));
					                rotateZ(radians(rightLowArmZ));
					                translate(42.6, 0, 0);
					                fill(rightLowArmColour);
					                box(85.2, 10, 10);	//right low arm
					                push();
					                    translate(42.6, 0, 0);
					                    rotateX(radians(rightHandX));
					                    rotateY(radians(rightHandY));
					                    rotateZ(radians(rightHandZ));
					                    translate(19.75, 0, 0);
					                    fill(rightHandColour);
					                    box(39.4, 10, 10);	//right hand
					                pop();
					                push();
					                    translate(42.6, 0, -2.5);
					                    rotateX(radians(rightThumbX));
					                    rotateY(radians(rightThumbY));
					                    rotateZ(radians(rightThumbZ));
					                    translate(0, 0, -12.5);
					                    fill(rightThumbColour);
					                    box(10, 10, 25);	//right thumb
					                pop();
			                	pop();
			            	pop();
			            pop();  
			        pop();
			    pop();
			      
			      
	    	//------------------------------------------
	    	//Left Leg
	    	//------------------------------------------ 
		        push();
			        translate(-36.5, 0, 0);
			        translate(0, 7.5, 0);
			        rotateX(radians(leftUpLegX));
			        rotateY(radians(leftUpLegY));
			        rotateZ(radians(leftUpLegZ));
			        translate(0, 78.55, 0);
			        fill(leftUpLegColour);
			        box(10, -157.1, 10);	//left upper leg
			        push();
		            	translate(0, 78.55, 0);
			            rotateX(radians(leftLowLegX));
			            rotateY(radians(leftLowLegY));
			            rotateZ(radians(leftLowLegZ));
			            translate(0, 77.1, 0);
			            fill(leftLowLegColour);
			            box(10, -154.2, 10);	//left lower leg
			            push();
		            		translate(0, 77.1, 0);
				            rotateX(radians(leftFootX));
				            rotateY(radians(leftFootY));
				            rotateZ(radians(leftFootZ));
				            rotateX(-1.309);
				            translate(0, 29.65, 0);
				            fill(leftFootColour);
				            box(20, 59.3, 10);	//left foot
		            	pop();
		          	pop();
		        pop();
			              
			              
		    //------------------------------------------
		    //Right Leg
		    //------------------------------------------   
		        push();
			        translate(36.5, 0, 0);
			        translate(0, 7.5, 0);
			        rotateX(radians(rightUpLegX));
			        rotateY(radians(rightUpLegY));
			        rotateZ(radians(rightUpLegZ));
			        translate(0, 78.55, 0);
			        fill(rightUpLegColour);
			        box(10, -157.1, 10);	//right upper leg
			        push();
			            translate(0, 78.55, 0);
			            rotateX(radians(rightLowLegX));
			            rotateY(radians(rightLowLegY));
			            rotateZ(radians(rightLowLegZ));
			            translate(0, 77.1, 0);
			            fill(rightLowLegColour);
			            box(10, -154.2, 10);	//right lower leg
			            push();
			            	translate(0, 77.1, 0);
			            	rotateX(radians(rightFootX));
			            	rotateY(radians(rightFootY));
			            	rotateZ(radians(rightFootZ));
			            	rotateX(-1.309);
			            	translate(0, 29.65, 0);
			            	fill(rightFootColour);
			            	box(20, 59.3, 10);	//right foot
			            pop();
		        	pop();
		    	pop();
			pop();
		pop(); //closes the one way up top
	}
	pop();
}

//=======================================================================
//PARSE THE BVH FILE
//=======================================================================
window.onload = function(event) {
	document.getElementById('motionData').addEventListener('change', parseMotionData, false);
}

function parseMotionData() {
	test = [];
	transArray = [];

	start = 0;
	frameNum = 0;
	frame = 0;

	moveArray = [];

	canRun = false;

	var fileReader = new FileReader();
	
	var file = event.target.files[0];
	fileReader.readAsText(file);

	fileReader.onload = function() {
		var moveData = event.target.result;
		moveArrayBuilder(moveData);
	}
}

function moveArrayBuilder(moveData) {
	var test = moveData.split('\n');

	//split by line and then find where the datapoints start
	for (var i = 0; i < test.length; i++) {
		if (test[i] == 'MOTION') {
			var start = i + 3;
			var frames = test[i+1].split(' ');
			frameNum = frames[1];
			break;
		}
	}

	for (var k = 0; k < (test.length)-start; k++) {
		var transArray = test[start+k].split(' ');
		var tranSize = 78;
		var tempArray = [];

		for (var j = 0; j < tranSize; j++) {
			tempArray.push(transArray[j+1]);
		}
		moveArray.push(tempArray);
	}

	canRun = true;
}

//=======================================================================
//APPLY MOTION ANIMATION FROM BVH
//=======================================================================
function getNextFrame(frame) {
	moveX = moveArray[frame][0];
	moveY = moveArray[frame][1];
	moveZ = moveArray[frame][2];

	hipsX = moveArray[frame][3];
	hipsY = moveArray[frame][4];
	hipsZ = moveArray[frame][5];

	leftUpLegX = moveArray[frame][6];
	leftUpLegY = moveArray[frame][7];
	leftUpLegZ = moveArray[frame][8];

	leftLowLegX = moveArray[frame][9];
	leftLowLegY = moveArray[frame][10];
	leftLowLegZ = moveArray[frame][11];

	leftFootX = moveArray[frame][12];
	leftFootY = moveArray[frame][13];
	leftFootZ = moveArray[frame][14];

	leftToeX = moveArray[frame][15];
	leftToeY = moveArray[frame][16];
	leftToeZ = moveArray[frame][17];

	rightUpLegX = moveArray[frame][18];
	rightUpLegY = moveArray[frame][19];
	rightUpLegZ = moveArray[frame][20];

	rightLowLegX = moveArray[frame][21];
	rightLowLegY = moveArray[frame][22];
	rightLowLegZ = moveArray[frame][23];

	rightFootX = moveArray[frame][24];
	rightFootY = moveArray[frame][25];
	rightFootZ = moveArray[frame][26];

	rightToeX = moveArray[frame][27];
	rightToeY = moveArray[frame][28];
	rightToeZ = moveArray[frame][29];

	spineX = moveArray[frame][30];
	spineY = moveArray[frame][31];
	spineZ = moveArray[frame][32];

	spine1X = moveArray[frame][33];
	spine1Y = moveArray[frame][34];
	spine1Z = moveArray[frame][35];

	neckX = moveArray[frame][36];
	neckY = moveArray[frame][37];
	neckZ = moveArray[frame][38];

	headX = moveArray[frame][39];
	headY = moveArray[frame][40];
	headZ = moveArray[frame][41];

	leftShoulderX = moveArray[frame][42];
	leftShoulderY = moveArray[frame][43];
	leftShoulderZ = moveArray[frame][44];

	leftUpArmX = moveArray[frame][45];
	leftUpArmY = moveArray[frame][46];
	leftUpArmZ = moveArray[frame][47];

	leftLowArmX = moveArray[frame][48];
	leftLowArmY = moveArray[frame][49];
	leftLowArmZ = moveArray[frame][50];

	leftHandX = moveArray[frame][51];
	leftHandY = moveArray[frame][52];
	leftHandZ = moveArray[frame][53];

	leftThumbX = moveArray[frame][57];
	leftThumbY = moveArray[frame][58];
	leftThumbZ = moveArray[frame][59];

	rightShoulderX = moveArray[frame][60];
	rightShoulderY = moveArray[frame][61];
	rightShoulderZ = moveArray[frame][62];

	rightUpArmX = moveArray[frame][63];
	rightUpArmY = moveArray[frame][64];
	rightUpArmZ = moveArray[frame][65];

	rightLowArmX = moveArray[frame][66];
	rightLowArmY = moveArray[frame][67];
	rightLowArmZ = moveArray[frame][68];

	rightHandX = moveArray[frame][69];
	rightHandY = moveArray[frame][71];
	rightHandZ = moveArray[frame][72];

	rightThumbX = moveArray[frame][75];
	rightThumbY = moveArray[frame][76];
	rightThumbZ = moveArray[frame][77];
}

function runAgain(){
	canRun = true;
	frame = 0;
}

function testFunction(output){
	test = [];
	transArray = [];

	start = 0;
	frameNum = 0;
	frame = 0;

	moveArray = [];

	canRun = false;
	
	fetch(output)
		.then(response => response.text())
		.then(data => {
			moveArrayBuilder(data)
		});
}
