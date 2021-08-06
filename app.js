
// initialize kaboom context

// options
kaboom({
    global: true, // import all kaboom functions to global namespace
    width: 640, // width of canvas
    height: 480, // height of canvas
    canvas: document.getElementById("game"), // use custom canvas
    scale: 1, // pixel size (for pixelated games you might want smaller size with scale)
    clearColor: [0, 1, 0, 1], // background color (default is a checker board background)
    fullscreen: false, // if fullscreen
    crisp: true, // if pixel crisp (for sharp pixelated games)
    debug: true, // debug mode
});

loadSprite("bry", "./assets/images/bry.png");

let initialCamScale = 3;


const SPEED = 150;

// define a scene
scene("main", () => {


	// add a text
	add([
		text("Survivor Bry", 16),
        color('black'),
		pos(10, 10),
	]);

    // const player = get("player")[0];

    const player = add([
        sprite("bry"),
        pos(320, 240),
        scale(0.5),
        origin("center"),
        "player",
    ]);

    camPos(player.pos);
    camScale(initialCamScale);
    
    loop(0.1, ()=>{
        if( initialCamScale > 1){
            camScale(initialCamScale-0.1);
        }
    });


    // camera position follow player
    player.action(() => {
        camPos(player.pos);
    });

    const dirs = {
		"left": vec2(-1, 0),
		"right": vec2(1, 0),
		"up": vec2(0, -1),
		"down": vec2(0, 1),
	};

	for (const dir in dirs) {
		keyDown(dir, () => {
			player.move(dirs[dir].scale(SPEED));
		});
	}


});

// start the game
start("main");