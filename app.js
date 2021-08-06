
// initialize kaboom context

// options
kaboom({
    global: true, // import all kaboom functions to global namespace
    width: 640, // width of canvas
    height: 480, // height of canvas
    canvas: document.getElementById("game"), // use custom canvas
    scale: 2, // pixel size (for pixelated games you might want smaller size with scale)
    clearColor: [0, 0, 1, 1], // background color (default is a checker board background)
    fullscreen: false, // if fullscreen
    crisp: true, // if pixel crisp (for sharp pixelated games)
    debug: true, // debug mode
});

// define a scene
scene("main", () => {

	// add a text at position (100, 100)
	add([
		text("Survivor Bry", 16),
		pos(10, 10),
	]);

});

// start the game
start("main");