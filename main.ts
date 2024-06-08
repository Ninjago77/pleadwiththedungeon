import kaboom, { GameObj } from "kaboom"
import "kaboom/global"

// initialize context
kaboom({ font: "monospace" });

// loadSound("win","https://raw.githubusercontent.com/Ninjago77/genetictech/main/sounds/winner.mp3");
// loadSound("wrong","https://raw.githubusercontent.com/Ninjago77/genetictech/main/sounds/wrong.mp3");

const SCREEN_WIDTH = 16*16;// 1525;
const SCREEN_HEIGHT = 8*16;// 700;

setBackground(BLACK);
const w = width() / SCREEN_WIDTH;
const h = height() / SCREEN_HEIGHT;
camScale(new Vec2(Math.min(h, w),Math.min(h, w)));
camPos(width() / 2, height() / 2);

function posify(x: number, y: number) {
    // return pos(x,y)
    return pos(x + ((width() - SCREEN_WIDTH) / 2), y + ((height() - SCREEN_HEIGHT) / 2))
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

// loadSprite("warm_ocean", "https://raw.githubusercontent.com/Ninjago77/genetictech/main/sprites/backgrounds/warm ocean.png",);
// loadSprite("deep_ocean", "https://raw.githubusercontent.com/Ninjago77/genetictech/main/sprites/backgrounds/deep ocean.png");
// loadSprite("dna_black", "https://raw.githubusercontent.com/Ninjago77/genetictech/main/sprites/dna/dna black.png");
// loadSprite("arrow_black", "https://raw.githubusercontent.com/Ninjago77/genetictech/main/sprites/arrow_black.png");
// loadSprite("arrow_white", "https://raw.githubusercontent.com/Ninjago77/genetictech/main/sprites/arrow_white.png");

add([
    posify(SCREEN_WIDTH/2, SCREEN_HEIGHT/2),
    text("center", {
        size: 16,
        // font: "sans-serif",
    }),
    anchor("center"),
]);


copyright();


// loadSprite("calm_water", "https://raw.githubusercontent.com/Ninjago77/genetictech/main/sprites/waters/calm water.png");
// loadSprite("fast_water", "https://raw.githubusercontent.com/Ninjago77/genetictech/main/sprites/waters/fast water.png");
// const water_speeds = [
//     [
//         add([
//             sprite("calm_water"),
//             posify(330, 600),
//             anchor("center"),
//             scale(0.25),
//             area(),
//         ]),
//         add([
//             posify(510, 600),
//             anchor("center"),
//             color(WHITE),
//             text("Calm Water (Waters\n  are slow & still)", {
//                 size: 24,
//                 font: "serif",
//             }),
//         ]),
//     ],
//     [
//         add([
//             sprite("fast_water"),
//             posify(320, 600),
//             anchor("center"),
//             scale(0.20),
//             area(),
//         ]),
//         add([
//             posify(510, 600),
//             anchor("center"),
//             color(WHITE),
//             text("    Fast Flowing Water\n(Waters are rapid & fast)", {
//                 size: 24,
//                 font: "serif",
//             }),
//         ]),
//     ],
// ];

// water_speeds[1][0].hidden = !water_speeds[1][0].hidden;
// water_speeds[1][1].hidden = !water_speeds[1][1].hidden;
// var is_calm_water = true;

// function switch_water_speeds() {
//     water_speeds[0][0].hidden = !water_speeds[0][0].hidden;
//     water_speeds[0][1].hidden = !water_speeds[0][1].hidden;
    
//     water_speeds[1][0].hidden = !water_speeds[1][0].hidden;
//     water_speeds[1][1].hidden = !water_speeds[1][1].hidden;

//     is_calm_water = !is_calm_water;
// }

// // load assets
// loadSprite("dna_red", "https://raw.githubusercontent.com/Ninjago77/genetictech/main/sprites/dna/dna red.png",);
// loadSprite("dna_magenta", "https://raw.githubusercontent.com/Ninjago77/genetictech/main/sprites/dna/dna magenta.png");
// loadSprite("dna_green", "https://raw.githubusercontent.com/Ninjago77/genetictech/main/sprites/dna/dna green.png");
// loadSprite("dna_lime", "https://raw.githubusercontent.com/Ninjago77/genetictech/main/sprites/dna/dna lime.png");
// loadSprite("dna_turquoise", "https://raw.githubusercontent.com/Ninjago77/genetictech/main/sprites/dna/dna turquoise.png");
// loadSprite("dna_indigo", "https://raw.githubusercontent.com/Ninjago77/genetictech/main/sprites/dna/dna indigo.png");
// loadSprite("dna_orange", "https://raw.githubusercontent.com/Ninjago77/genetictech/main/sprites/dna/dna orange.png");
// loadSprite("dna_brown", "https://raw.githubusercontent.com/Ninjago77/genetictech/main/sprites/dna/dna brown.png");

// const gene_sprites_pic = [
//     ["dna_red", "dna_magenta"],
//     ["dna_brown", "dna_orange"],
//     ["dna_indigo", "dna_turquoise"],
//     ["dna_green", "dna_lime"],
// ];

// const gene_unmovable_traits_pos = [
//     posify((SCREEN_WIDTH - 450) * (2 / 8) + 512 - 64, SCREEN_HEIGHT / 8),
//     posify((SCREEN_WIDTH - 450) * (4 / 8) + 512 - 64, SCREEN_HEIGHT / 8),
//     posify((SCREEN_WIDTH - 450) * (6 / 8) + 512 - 64, SCREEN_HEIGHT / 8),
// ];

// for (let i = 0; i < gene_unmovable_traits_pos.length; i++) {
//     // gene_sprites.push(
//     add([
//         sprite("dna_black"),
//         gene_unmovable_traits_pos[i],
//         area(),
//         scale(0.5),
//         rotate(90),
//         anchor("center"),
//         "gene",
//     ])
//     // );
// }


// const gene_current_traits_pos = [
//     posify((SCREEN_WIDTH - 450) * (1 / 8) + 512 - 64, SCREEN_HEIGHT / 8),
//     // posify((SCREEN_WIDTH-450) * (2 / 8) + 512 -64,SCREEN_HEIGHT/8),
//     posify((SCREEN_WIDTH - 450) * (3 / 8) + 512 - 64, SCREEN_HEIGHT / 8),
//     // posify((SCREEN_WIDTH-450) * (4 / 8) + 512 -64,SCREEN_HEIGHT/8),
//     posify((SCREEN_WIDTH - 450) * (5 / 8) + 512 - 64, SCREEN_HEIGHT / 8),
//     // posify((SCREEN_WIDTH-450) * (6 / 8) + 512 -64,SCREEN_HEIGHT/8),
//     posify((SCREEN_WIDTH - 450) * (7 / 8) + 512 - 64, SCREEN_HEIGHT / 8),

// ]

// const gene_lib_pos = [
//     posify(SCREEN_WIDTH / 10, SCREEN_HEIGHT * (1 / 5) + 32),
//     posify(SCREEN_WIDTH / 10, SCREEN_HEIGHT * (2 / 5) + 32),
//     posify(SCREEN_WIDTH / 10, SCREEN_HEIGHT * (3 / 5) + 32),
//     posify(SCREEN_WIDTH / 10, SCREEN_HEIGHT * (4 / 5) + 32),

// ];
// var gene_sprites: Array<GameObj> = [];
// var gene_imp: Array<GameObj> = [];

// for (let i = 0; i < gene_sprites_pic.length; i++) {
//     gene_sprites.push(
//         add([
//             sprite(gene_sprites_pic[i][0]),
//             gene_lib_pos[i],
//             area(),
//             scale(0.5),
//             rotate(90),
//             anchor("center"),
//             "gene",
//         ])
//     );
//     gene_imp.push(
//         add([
//             sprite(gene_sprites_pic[i][1]),
//             gene_lib_pos[i],
//             area(),
//             scale(0.5),
//             rotate(90),
//             anchor("center"),
//             "gene",
//         ])
//     );
//     gene_imp[gene_imp.length - 1].hidden = true;
// }

// for (let i = 0; i < gene_current_traits_pos.length; i++) {
//     gene_sprites.push(
//         add([
//             sprite(gene_sprites_pic[i][1]),
//             gene_current_traits_pos[i],
//             area(),
//             scale(0.5),
//             rotate(90),
//             anchor("center"),
//             "gene",
//         ])
//     );
//     gene_imp.push(
//         add([
//             sprite(gene_sprites_pic[i][0]),
//             gene_current_traits_pos[i],
//             area(),
//             scale(0.5),
//             rotate(90),
//             anchor("center"),
//             "gene",
//         ])
//     );
//     gene_imp[gene_imp.length - 1].hidden = true;
// }


// const trait_switch = [
//     add([
//         rect(135, 28),
//         posify(585, 185),
//         area(),
//         color(BLACK),
//         outline(4),
//         anchor("center"),
//     ]),
//     add([
//         rect(135, 28),
//         posify(855, 185),
//         area(),
//         color(BLACK),
//         outline(4),
//         anchor("center"),
//     ]),
//     add([
//         rect(135, 28),
//         posify(1120, 185),
//         area(),
//         color(BLACK),
//         outline(4),
//         anchor("center"),
//     ],),
//     add([
//         rect(135, 28),
//         posify(1390, 185),
//         area(),
//         color(BLACK),
//         outline(4),
//         anchor("center"),
//     ]),

// ];

// add([
//     posify(585, 160),
//     anchor("center"),
//     color(BLACK),
//     text("Colouring:", { // Predator visibility
//         size: 16,
//     }),
// ]);
// const trait_1 = [
//     add([
//         posify(585, 185),
//         anchor("center"),
//         color(MAGENTA),
//         text("Bright", {
//             size: 20,
//         }),
//     ]),
//     add([
//         posify(585, 185),
//         anchor("center"),
//         color(RED),
//         text("Dull", {
//             size: 20,
//         }),
//     ])
// ];

// add([
//     posify(855, 160),
//     anchor("center"),
//     color(BLACK),
//     text("Night Vison:", { // Deep ocean, Warm Ocean 
//         size: 16,
//     }),
// ]);
// const trait_2 = [
//     add([
//         posify(855, 185),
//         anchor("center"),
//         color(rgb(248, 161, 2)),
//         text("Present", {
//             size: 20,
//         }),
//     ]),
//     add([
//         posify(855, 185),
//         anchor("center"),
//         color(rgb(116, 78, 18)),
//         text("Not Present", {
//             size: 20,
//         }),
//     ])
// ];

// add([
//     posify(1120, 160),
//     anchor("center"),
//     color(BLACK),
//     text("Size:", {// large fish eat small ones, small fish compete other small fish for food
//         size: 16,
//     }),
// ]);
// const trait_3 = [
//     add([
//         posify(1120, 185),
//         anchor("center"),
//         color(rgb(64, 224, 208)),
//         text("Small", {
//             size: 20,
//         }),
//     ]),
//     add([
//         posify(1120, 185),
//         anchor("center"),
//         color(rgb(75, 0, 130)),
//         text("Large", {
//             size: 20,
//         }),
//     ])
// ];

// add([
//     posify(1390, 160),
//     anchor("center"),
//     color(BLACK),
//     text("Suction Feeding:", {// Fast waters easy feeding, calm waters hard feeding 
//         size: 16,
//     }),
// ]);
// const trait_4 = [
//     add([
//         posify(1390, 185),
//         anchor("center"),
//         color(GREEN),
//         text("Present", {
//             size: 20,
//         }),
//     ]),
//     add([
//         posify(1390, 185),
//         anchor("center"),
//         color(rgb(0, 128, 0)),
//         text("Not Present", {
//             size: 20,
//         }),
//     ])
// ];
// const traits_text_li = [trait_1, trait_2, trait_3, trait_4,];
// for (let i = 0; i < traits_text_li.length; i++) {
//     traits_text_li[i][1].hidden = true;
// }

// for (let i = 0; i < trait_switch.length; i++) {
//     trait_switch[i].onClick(() => {
//         organism_traits_dark[i] = !organism_traits_dark[i];
//         traits_text_li[i][0].hidden = !traits_text_li[i][0].hidden;
//         traits_text_li[i][1].hidden = !traits_text_li[i][1].hidden;
//         gene_imp[i].hidden = !gene_imp[i].hidden;
//         gene_imp[i + 4].hidden = !gene_imp[i + 4].hidden;

//     });
// }



// // add a kaboom on mouse click
// onClick(() => {
//     console.log(mousePos());
//     console.log(SCREEN_WIDTH);
//     console.log(SCREEN_HEIGHT);

//     // switch_predator();
//     // switch_water_speeds();
//     // switch_ocean();
//     // switch_small_fish_presence();

// })

// // // burp on "b"
// // onKeyPress("b", burp)