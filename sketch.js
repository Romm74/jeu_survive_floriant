let posX, posY;

function setup() {
    posX = 100; 
    posY = 100;
    createCanvas(640, 480);
    
    fill(255, 0, 0);
    background(255, 204, 0);
}

function draw() {
    background(255, 204, 100);
    updatePositionCercle();
    testOutOfScreen();
    ellipse(50, 50, 80, 80);
    circle(posX, posY, 50);
}

function updatePositionCercle() {
   
    if (keyIsDown(LEFT_ARROW)) {
        posX -= 5;
        console.log("flèche de droite appuyée")
    } else {
        console.log("pas appuyée");
    }
    if (keyIsDown(RIGHT_ARROW)) {
        posX += 5;
        console.log("flèche de gauche appuyée")
    } else {
        console.log("pas appuyée");
    }
    if (keyIsDown(UP_ARROW)) {
        posY -= 5;
        console.log("flèche du haut appuyée")
    } else {
        console.log("pas appuyée");
    }

    if (keyIsDown(DOWN_ARROW)) {
        posY += 5;
        console.log("flèche du bas appuyée")
    } else {
        console.log("pas appuyée");
    }
}

function testOutOfScreen() {
    
    if (posX < 0) {
       posX = 0; 
    }
    if (posX > 640) {
        posX = 640;
    }
    if (posY < 0 ) {
        posY = 0 ;
    }
    if (posY > 480) {
        posY = 480;
    }
}


    


