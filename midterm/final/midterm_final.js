// code generates still image of a camera. 
// flash appears when user left clicks the screen then immediately returns to still image.

const drawing = p5 => {

    let flashTime = -9999;

    p5.setup = () => {
        p5.createCanvas(600, 600);
    }

    p5.draw = () => {
        p5.background(240);

        // main rectangle size
        let leftCoords = [p5.width * 0.2, p5.height * 0.7];
        let centerCoords = [p5.width * 0.8, p5.height * 0.7];

        let rectWidth = centerCoords[0] - leftCoords[0];
        let rectHeight = 210;

        // small rectangle size
        let smallWidth = rectWidth * 3.3/5;
        let smallHeight = rectHeight * 1/5.5;

        // small rectangle position
        let smallX = centerCoords[0] - smallWidth;
        let smallY = leftCoords[1] - rectHeight - smallHeight;

        p5.fill(230);
        p5.stroke(0);
        p5.strokeWeight(2);

        // main rectangle
        p5.line(leftCoords[0], leftCoords[1], centerCoords[0], centerCoords[1]);
        p5.line(leftCoords[0], leftCoords[1] - 210, centerCoords[0], centerCoords[1] - 210);
        p5.line(leftCoords[0], leftCoords[1], leftCoords[0], leftCoords[1] - 210);
        p5.line(centerCoords[0], centerCoords[1], centerCoords[0], centerCoords[1] - 210);

        // small rect
        p5.rect(smallX, smallY, smallWidth, smallHeight);
        
        // big circle
        let circleX = leftCoords[0] + 240;
        let circleY = leftCoords[1] - 210 / 2;
        let circleSize = 220;

        p5.circle(circleX, circleY, circleSize);

        // small circle
        let innerCircleX = leftCoords[0] + 240;
        let innerCircleY = leftCoords[1] - 210 / 2;
        let innerCircleSize = 170;

        p5.fill(40);
        p5.circle(innerCircleX, innerCircleY, innerCircleSize);

        p5.noFill();

        let arcWidth = circleSize / 4;
        let arcHeight = circleSize / 10;

        p5.arc(180,210,arcWidth,arcHeight,p5.PI,p5.TWO_PI);

        p5.fill(255, 0, 0);
        p5.textSize(32);
        p5.textAlign(p5.CENTER);
        p5.text("S M I L E", p5.width/2, 100);

        // flash after mouse click
        if (p5.millis() - flashTime < 300) {

            // white flash overlay
            p5.noStroke();
            p5.fill(255,255,255,180);
            p5.rect(0,0,p5.width,p5.height);

            // explosion shape
            p5.stroke(255,150,0);
            p5.strokeWeight(3);

            // position at the upper right of the camera
            let x = centerCoords[0]; - 20;
            let y = centerCoords[1] - 215;

            p5.line(x,y,x+20,y);
            p5.line(x,y,x-20,y);
            p5.line(x,y,x,y+20);
            p5.line(x,y,x,y-20);

            p5.line(x,y,x+15,y+15);
            p5.line(x,y,x-15,y-15);
            p5.line(x,y,x+15,y-15);
            p5.line(x,y,x-15,y+15);
            }
    }

    p5.mousePressed = () => {
        console.log("Mouse Pressed!");
        flashTime = p5.millis();
    }
}

new p5(drawing);