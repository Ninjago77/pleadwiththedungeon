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
    loadSprite(`tile${i}`,`sprites/Dungeon_Tileset/tile${"0".repeat(3-`${i}`.length)}${i}.png`);
}

loadSprite("thing_tileset", "sprites/Things_Tileset.png",{
    sliceX: 21*4,
    sliceY: 1,
    anims: {
        box1: {from: 0, to: 3},
        box2: {from: 4, to: 7},
        candlestick1: {from: 8, to: 11},
        candlestick2: {from: 12, to: 15},
        chest: {from: 16, to: 19},
        chest_open: {from: 20, to: 23},
        coin: {from: 24, to: 27},
        flag: {from: 28, to: 31},
        flask1: {from: 32, to: 35},
        flask2: {from: 36, to: 39},
        flask3: {from: 40, to: 43},
        flask4: {from: 44, to: 47},
        key1: {from: 48, to: 51},
        key2: {from: 52, to: 55},
        minibox1: {from: 56, to: 59},
        minibox2: {from: 60, to: 63},
        minichest: {from: 64, to: 67},
        minichest_open: {from: 68, to: 71},
        peaks: {from: 72, to: 75},
        side_torch: {from: 76, to: 79},
        torch: {from: 80, to: 83},

    },
});


// loadSound("win","https://raw.githubusercontent.com/Ninjago77/pleadwiththedungeon/main/sounds/winner.mp3");
// loadSound("wrong","https://raw.githubusercontent.com/Ninjago77/pleadwiththedungeon/main/sounds/wrong.mp3");

const SCREEN_WIDTH = (16+1)*16;// 1525;
const SCREEN_HEIGHT = (8+.5)*16;// 700;

setBackground(BLACK);
const w = width() / SCREEN_WIDTH;
const h = height() / SCREEN_HEIGHT;
camScale(new Vec2(w,h));
camPos(width() / 2, height() / 2);

function posify(x: number, y: number) {
    const offsetX = (width() - SCREEN_WIDTH) / 2;
    const offsetY = (height() - SCREEN_HEIGHT) / 2;
    return pos(x + offsetX, y + offsetY);
  }

function random_choice(arr:Array<any>) {
    return arr[Math.floor(Math.random() * arr.length)];
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
    sprite("thing_tileset", {
      animSpeed: 1,
      frame: 4,
    }),
    posify(SCREEN_WIDTH/2,SCREEN_HEIGHT/2),
    anchor("center"),
    scale(1),
]);
player.onMousePress((m) => selected_player++);

setInterval(() => {player.play(["box1","box2","candlestick1","candlestick2","chest","chest_open","coin","flag","flask1","flask2","flask3","flask4","key1","key2","minibox1","minibox2","minichest","minichest_open","peaks","side_torch","torch",][selected_player]);}, 500);
copyright();


var wall: any[] = [scale(1.0625),"wall"];
var ground: any[] = [scale(1.0625),"ground"];
var nothing: any[] = [scale(1.0625),"nothing"];
const wallCFG = {
    "↖": (p) => wall.concat(posify(p.x,p.y),sprite("tile0")),
    "A": (p) => wall.concat(posify(p.x,p.y),sprite(random_choice(["tile1","tile2","tile3","tile4"]))),
    "↗": (p) => wall.concat(posify(p.x,p.y),sprite("tile5")),
    "[": (p) => wall.concat(posify(p.x,p.y),sprite(random_choice(["tile10","tile20","tile30"]))),
    "#": (p) => ground.concat(posify(p.x,p.y),sprite(random_choice(["tile6","tile7","tile8","tile9","tile16","tile17","tile18","tile19","tile26","tile27","tile28","tile29"]))),
    "]": (p) => wall.concat(posify(p.x,p.y),sprite(random_choice(["tile15","tile25","tile35"]))),
    "↙": (p) => wall.concat(posify(p.x,p.y),sprite("tile40")),
    "V": (p) => wall.concat(posify(p.x,p.y),sprite(random_choice(["tile41","tile42","tile43","tile44"]))),
    "↘": (p) => wall.concat(posify(p.x,p.y),sprite("tile45")),

    "◤": (p) => ground.concat(posify(p.x,p.y),sprite("tile11")),
    "^": (p) => ground.concat(posify(p.x,p.y),sprite(random_choice(["tile12","tile13"]))),
    "◥": (p) => ground.concat(posify(p.x,p.y),sprite("tile14")),
    "(": (p) => ground.concat(posify(p.x,p.y),sprite("tile21")),
    ")": (p) => ground.concat(posify(p.x,p.y),sprite("tile24")),
    "◣": (p) => ground.concat(posify(p.x,p.y),sprite("tile31")),
    "v": (p) => ground.concat(posify(p.x,p.y),sprite(random_choice(["tile32","tile33"]))),
    "◢": (p) => ground.concat(posify(p.x,p.y),sprite("tile34")),

    ".": (p) => nothing.concat(posify(p.x,p.y),sprite("tile78")),
};
const level1Maps = {
    "leftleft": [
    "................",
    "................",
    "AAAAAAAAAA↗.....",
    "^^^^^^^^^◥].....",
    "vvvvvvvvv◢].....",
    "VVVVVVVVVV↘.....",
    "................",
    "................",
    ],
    "rightright": [
    '................',
    '................',
    '.....↖AAAAAAAAAA',
    '.....[◤^^^^^^^^^',
    '.....[◣vvvvvvvvv',
    '.....↙VVVVVVVVVV',
    '................',
    '................',
    ],
    "toptop": [
    '......[()]......',
    '......[()]......',
    '......[()]......',
    '......[()]......',
    '......[◣◢]......',
    '......↙VV↘......',
    '................',
    '................',
    ],
    "bottombottom": [
    '................',
    '................',
    '......↖AA↗......',
    '......[◤◥]......',
    '......[()]......',
    '......[()]......',
    '......[()]......',
    '......[()]......',
    ],
}

const level1 = addLevel(
// [
// "↖AAA↗...........",
// "[◤^◥]...........",
// "[(#)]............",
// "[◣v◢]...........",
// "↙VVV↘...........",
// "................",
// "................",
// "................",
// ]
level1Maps["bottombottom"]
,{
    tileHeight: 16,
    tileWidth: 16,
    tiles: wallCFG,

})