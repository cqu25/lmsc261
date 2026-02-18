const drawing = p5 => {
    p5.setup = () => { // #1 it calls p5.createCanvas method as a default
        p5.createCanvas(600, 600); 
    }

    p5.draw = () => {
        p5.background(0, 0, 0)

        // face
        p5.fill(270, 240, 80);
        p5.circle(300, 300, 500);

        // eyes eyes
        p5.fill(35, 35, 35); // grey
        p5.circle(200, 235, 60);

        p5.fill(35, 35, 35); // grey
        p5.circle(400, 235, 60);

        // mouth
        p5.fill(35, 35, 35); // grey
        p5.arc(300, 350, 200, 170, 0, p5.PI); // arc(x, y, width, height, startAngle, stopAngle)

    }

}

new p5(drawing); // #2 creates instance of drawing