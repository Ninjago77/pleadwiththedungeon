import kaboom, { GameObj } from "kaboom"
import "kaboom/global"

// initialize context
kaboom({ font: "monospace" });
loadRoot("https://raw.githubusercontent.com/Ninjago77/pleadwiththedungeon/main/");
loadSprite("player_tileset", "sprites/Players_Idle.png",{
    sliceX: 28,
    sliceY: 1,
    anims: {
        priest1: {from: 0, to: 3},
        priest2: {from: 4, to: 7},
        priest3: {from: 8, to: 11},
        skeleton2: {from: 12, to: 15},
        skeleton1: {from: 16, to: 19},
        skull: {from: 20, to: 23},
        vampire: {from: 24, to: 27},
    },
});

for (let i = 0; i < 100; i++) {
    loadSprite(`tile${i}`,`sprites/Dungeon_Tileset/tile0${i}`);
}



var wall: any[] = [area(),"wall"];

const level1 = addLevel([
    "↖^↗             ",
    "[#]             ",
    "↙v↘             ",
    "                ",
    "                ",
    "                ",
    "                ",
    "                ",
],{
    tileHeight: 16,
    tileWidth: 16,
    tiles: {
        "↖": () => wall.concat(sprite("tile00")),
        "^": () => wall.concat(sprite("tile02")),
        "↗": () => wall.concat(sprite("tile05")),
        "[": () => wall.concat(sprite("tile10")),
        "#": () => wall.concat(sprite("tile18")),
        "]": () => wall.concat(sprite("tile15")),
        "↙": () => wall.concat(sprite("tile40")),
        "v": () => wall.concat(sprite("tile41")),
        "↘": () => wall.concat(sprite("tile45")),
    }

})


// loadSound("win","https://raw.githubusercontent.com/Ninjago77/pleadwiththedungeon/main/sounds/winner.mp3");
// loadSound("wrong","https://raw.githubusercontent.com/Ninjago77/pleadwiththedungeon/main/sounds/wrong.mp3");

const SCREEN_WIDTH = 16*16;// 1525;
const SCREEN_HEIGHT = 8*16;// 700;

setBackground(BLACK);
const w = width() / SCREEN_WIDTH;
const h = height() / SCREEN_HEIGHT;
camScale(new Vec2(Math.min(h, w),Math.min(h, w)));
camPos(width() / 2, height() / 2);

function posify(x: number, y: number) {
    // return pos(x,y)
    return pos(x + ((Math.max(width(),SCREEN_WIDTH) - Math.min(width(),SCREEN_WIDTH)) / 2), y + ((Math.max(height(),SCREEN_HEIGHT) - Math.min(height(),SCREEN_HEIGHT)) / 2))
}

function copyright() {
    return add([
        posify(SCREEN_WIDTH - 30, SCREEN_HEIGHT - 15),
        text("Developed by: Shanvanth Arunmozhi", {
            size: 16,
            // font: "sans-serif",
        }),
        anchor("botright"),
    ]);
}


// add([
//     posify(SCREEN_WIDTH/2, SCREEN_HEIGHT/2),
//     text("center", {
//         size: 16,
//         // font: "sans-serif",
//     }),
//     anchor("center"),
// ]);
var selected_player = 0;
const player = add([
    sprite("player_tileset", {
      animSpeed: 1,
      frame: 4,
    }),
    posify(SCREEN_WIDTH/2,SCREEN_HEIGHT/2),
    anchor("center"),
    scale(1),
]);
player.onMousePress((m) => selected_player++);

setInterval(() => {player.play(["priest1","priest2","priest3","skeleton2","skeleton1","skull","vampire"][selected_player]);}, 500);
copyright();

