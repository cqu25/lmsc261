const drawing = p5 => {

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
        // oval arc
        let arcWidth = circleSize / 4;
        let arcHeight = circleSize / 10;

        p5.arc(
            180,
            210,
            arcWidth,
            arcHeight,
            p5.PI,
            p5.TWO_PI
        );

        p5.fill(255, 0, 0);
        p5.textSize(32);
        p5.textAlign(p5.CENTER);
        p5.text("S M I L E", p5.width/2, 100);
        
    }

    p5.mousePressed = () => {
        console.log("Mouse Pressed!");
    }
}

new p5(drawing);