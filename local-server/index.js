const express = require("express");
const robot = require("robotjs");
const app = express();
var port = 2828;

// middleware
app.use(express.json());
app.use(express.urlencoded());


app.post("/set-mouse-pos", function(req, res) {
    console.log(req.body)
    
    try {
        robot.moveMouse(req.body.x, req.body.y)
        res.end(JSON.stringify(req.body))
    } catch {
        console.log("Error reading body.")
    }
});

app.get("/get-mouse-pos", function(req, res) {
    var mousePos = robot.getMousePos();
    res.setHeader('content-type', 'application/json');
    res.send(`{"x": ${mousePos.x}, "y": ${mousePos.y}}`);
});

app.get("/get-screen-size", function(req, res) {
    var screenSize = robot.getScreenSize();
    res.setHeader('content-type', 'application/json');
    res.send(`{"x": ${screenSize.width}, "y": ${screenSize.height}}`);
});


// Start server
app.listen(port, function() {
    console.log("Server running on localhost:" + port);
});
