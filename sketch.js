var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(400,400); 
    //To use angle in Degrees
    angleMode(DEGREES);   
}

function draw(){
    background(0);

    //Translation and rotation 
    translate(200,200)
    rotate(-90)

    //Calculating time using predefined func from p5.js
    hr = hour();
    mn = minute();
    sc = second();

    //write a code here To create ab iterative rotation
   

    //drawing seconds hand
    push();
    rotate(scAngle); //rotate the hand based on angle calculated
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop()

    //drawing mins hand
    push();
    rotate(mnAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,75,0);
    pop()

    //writw a code for drawing hr hand
    

    stroke(255,0,255);
    point(0,0)

    //drawing the arcs
    strokeWeight(10);
    noFill();
    //Seconds
    stroke(255,0,0);
    arc(0,0,300,300,0,scAngle);
    //Minutes
    stroke(0,255,0);
    arc(0,0,280,280,0,mnAngle);
    //Hour
    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);
}