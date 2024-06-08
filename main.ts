import kaboom, { GameObj } from "kaboom"
import "kaboom/global"

// const organism_traits_dark = [false, false, false, false];
// initialize context
kaboom({ font: "monospace" });

// loadSound("win","https://raw.githubusercontent.com/Ninjago77/genetictech/main/sounds/winner.mp3");
// loadSound("wrong","https://raw.githubusercontent.com/Ninjago77/genetictech/main/sounds/wrong.mp3");

add([
    rect(width(),height()),
    pos(0, 0),
    area(),
    color(BLACK),
    anchor("topleft"),
]);

const SCREEN_WIDTH = 1525;
const SCREEN_HEIGHT = 700;

if (SCREEN_WIDTH > width()) {
    camScale(new Vec2(width() / SCREEN_WIDTH,width() / SCREEN_WIDTH));
    setBackground(BLACK);
}

function posify(x: number, y: number) {
    return pos(x+((width()-SCREEN_WIDTH)/2),y+((height()-SCREEN_HEIGHT)/2))
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


add([
    posify(SCREEN_WIDTH - 30, SCREEN_HEIGHT - 15),
    text("Developed by: Shanvanth Arunmozhi", {
        size: 16,
        // font: "sans-serif",
    }),
    anchor("botright"),
]);


// const deep_ocean = add([
//     sprite("deep_ocean", { width: SCREEN_WIDTH, height: SCREEN_HEIGHT }),
//     posify(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2),
//     anchor("center"),
//     area(),

// ]);

// const warm_ocean = add([
//     sprite("warm_ocean", { width: SCREEN_WIDTH, height: SCREEN_HEIGHT }),
//     posify(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2),
//     anchor("center"),
//     area(),
// ]);

// var is_deep_ocean = true;

// function switch_ocean() {
//     warm_ocean.hidden = !warm_ocean.hidden;
//     is_deep_ocean = !is_deep_ocean;
// }
// switch_ocean();

// // add([
// //     posify(SCREEN_WIDTH - 20, SCREEN_HEIGHT - 20),
// //     anchor("bottomright"),
// //     color(WHITE),
// //     text("Developed by: Shanvanth Arunmozhi", {
// //         size: 16,
// //         // font: "sans-serif",
// //     }),
// // ]);

// add([
//     posify(SCREEN_WIDTH - 30, SCREEN_HEIGHT - 15),
//     text("Developed by: Shanvanth Arunmozhi", {
//         size: 16,
//         // font: "sans-serif",
//     }),
//     anchor("botright"),
// ]);

// add([
//     rect(128 + 64, 512 + 128),
//     posify(150, 350),
//     area(),
//     color(rgb(120, 120, 120)),
//     outline(8),
//     anchor("center"),
//     // rounded(10),
// ]);

// add([
//     posify(150, 75),
//     anchor("center"),
//     text("Gene Library", {
//         size: 24, // 48 pixels tall
//         // font: "sans-serif", // specify any font you loaded or browser built-in
//     }),
// ])

// add([
//     rect(1024 + 128 + 64, 128 + 64 + 32),
//     posify(512 + 256 + 128, 125),
//     area(),
//     color(rgb(240, 240, 240)),
//     outline(8),
//     anchor("center"),
//     // rounded(10),
// ]);

// add([
//     posify(400, 45),
//     anchor("center"),
//     color(BLACK),
//     text("Organism's DNA", {
//         size: 24, // 48 pixels tall
//         // font: "sans-serif", // specify any font you loaded or browser built-in
//     }),
// ])

// loadSprite("edit_dna", "https://raw.githubusercontent.com/Ninjago77/genetictech/main/sprites/edit dna.png");
// add([
//     sprite("edit_dna",),
//     posify(400, 120),
//     anchor("center"),
//     scale(0.22),
//     area(),
// ]);

// add([
//     posify(1370, 435),
//     anchor("center"),
//     color(WHITE),
//     text("STEP 1", { 
//         size: 20,
//         font: "fantasy",
//     }),
// ]);
// add([
//     sprite("arrow_white",),
//     posify(1430, 435),
//     anchor("center"),
//     scale(0.08),
//     rotate(270),
//     area(),
// ]);

// add([
//     posify(1370, 515),
//     anchor("center"),
//     color(WHITE),
//     text("STEP 3", { 
//         size: 20,
//         font: "fantasy",
//     }),
// ]);
// add([
//     sprite("arrow_white",),
//     posify(1430, 515),
//     anchor("center"),
//     scale(0.08),
//     rotate(90),
//     area(),
// ]);

// add([
//     posify(385, 185),
//     anchor("center"),
//     color(BLACK),
//     text("STEP 2", { 
//         size: 20,
//         font: "fantasy",
//     }),
// ]);
// add([
//     sprite("arrow_black",),
//     posify(455, 185),
//     anchor("center"),
//     scale(0.08),
//     rotate(0),
//     area(),
// ]);add([
//     sprite("arrow_black",),
//     posify((SCREEN_WIDTH - 450) * (2 / 8) + 512 - 64, 185),
//     anchor("center"),
//     scale(0.08),
//     rotate(0),
//     area(),
// ]);add([
//     sprite("arrow_black",),
//     posify((SCREEN_WIDTH - 450) * (4 / 8) + 512 - 64, 185),
//     anchor("center"),
//     scale(0.08),
//     rotate(0),
//     area(),
// ]);add([
//     sprite("arrow_black",),
//     posify((SCREEN_WIDTH - 450) * (6 / 8) + 512 - 64, 185),
//     anchor("center"),
//     scale(0.08),
//     rotate(0),
//     area(),
// ]);

// add([
//     rect(200, 100),
//     posify(1390, 350),
//     area(),
//     color(BLACK),
//     outline(8),
//     anchor("center"),
// ]).onClick(() => {
//     destroyAll("tag_explain_text");
//     if (chance(0.5)) {
//         switch_predator();
//     }
//     if (chance(0.5)) {
//         switch_water_speeds();
//     }
//     if (chance(0.5)) {
//         switch_ocean();
//     }
//     if (chance(0.5)) {
//         switch_small_fish_presence();
//     }
// });

// add([
//     posify(1390, 350),
//     anchor("center"),
//     color(WHITE),
//     text("       Reroll\nEnvironmental\n      Factors", {
//         size: 20,
//         font: "sans-serif",
//     }),
// ]);


// add([
//     rect(200, 100),
//     posify(1390, 600),
//     area(),
//     color(BLACK),
//     outline(8),
//     anchor("center"),
// ]).onClick(() => {
//     let environmental_factors = [
//         is_shark,
//         is_deep_ocean, // warm ocean
//         is_small_fish_present,
//         is_calm_water, // fast water ⛔✅
//     ];

//     var trait1_text = {};
//     //          environ,trait
//     trait1_text["11"] = "✅ Dull colour makes it less noticeable to predators";
//     trait1_text["10"] = "⛔ Bright colour makes it more noticeable to predators";
//     trait1_text["01"] = "⛔ Dull colour makes it less likely find a mate";
//     trait1_text["00"] = "✅ Bright colour makes it more likely find a mate";
    
//     var trait2_text = {};
//     //          environ,trait
//     trait2_text["11"] = "✅ Night Vision isn't needed when light is present";
//     trait2_text["10"] = "⛔ Night Vision Eyes are sensitive to light, they go blind due to a lot of light";
//     trait2_text["01"] = "⛔ Cannot survive without Night Vision in a dark habitat";
//     trait2_text["00"] = "✅ Night Vision is needed in a dark habitat";

//     var trait3_text = {};
//     //          environ,trait
//     trait3_text["11"] = "✅ Large fish can eat the small fish to sustain themselves";
//     trait3_text["10"] = "⛔ Small fish are competing with the other small fish for food";
//     trait3_text["01"] = "⛔ Large Fish cannot sustain on less food";
//     trait3_text["00"] = "✅ Small Fish don't need to compete with other species for food";

//     var trait4_text = {};
//     //          environ,trait
//     trait4_text["11"] = "✅ Suction Feeding isn't needed in calm waters";
//     trait4_text["10"] = "⛔ Suction Feeding uses too much energy because of limited water flow";
//     trait4_text["01"] = "⛔ Cannot Survive without Suction Feeding in rapid waters";
//     trait4_text["00"] = "✅ Suction Feeding is needed to eat in rapid waters";

//     const traits_text = [trait1_text, trait2_text, trait3_text, trait4_text];
//     var te_xt = '';
//     for (let i = 0; i < 4; i++) {
//         te_xt += traits_text[i][`${Number(environmental_factors[i])}${Number(organism_traits_dark[i])}`]+"\n\n";
//     }
//     console.log(te_xt);
//     add([
//         rect(450, 350),
//         posify(950, 470),
//         area(),
//         color(rgb(120, 120, 120)),
//         outline(8),
//         anchor("center"),
//         "tag_explain_text",
//     ])
//     add([
//         posify(950, 480),
//         anchor("center"),
//         // color(BLACK),
//         text(te_xt, {
//             size: 24,
//             font: "arial",
//             width: 400,
//         }),
//         "tag_explain_text",
//     ]);
//     let j = 0;
//     for (let i = 0; i < 4; i++) {
//         if (environmental_factors[i]==organism_traits_dark[i]) {
//             j += 1;
//         }
//     }
//     console.log(j)
//     if (j==4) {
//         addKaboom(mousePos());
//         play("win");
//     } else {
//         play("wrong");
//     }

// });

// add([
//     posify(1390, 600),
//     anchor("center"),
//     color(WHITE),
//     text("Monitor & Test", {
//         size: 20,
//         font: "sans-serif",
//     }),
// ]);

// loadSprite("small_fish", "https://raw.githubusercontent.com/Ninjago77/genetictech/main/sprites/size trait/small fish.png");
// loadSprite("yes_mark", "https://raw.githubusercontent.com/Ninjago77/genetictech/main/sprites/size trait/mark YES.png");
// loadSprite("no_mark", "https://raw.githubusercontent.com/Ninjago77/genetictech/main/sprites/size trait/mark NO.png");

// add([
//     sprite("small_fish"),
//     posify(570, 300),
//     anchor("center"),
//     scale(0.20),
//     area(),
// ])


// const fish_presence = [
//     [
//         add([
//             sprite("yes_mark"),
//             posify(570, 300),
//             anchor("center"),
//             scale(0.1),
//             area(),
//         ]),
//         add([
//             posify(580, 390),
//             anchor("center"),
//             color(WHITE),
//             text("Small fish\nare present", {
//                 size: 24,
//                 font: "serif",
//             }),
//         ]),
//     ],
//     [
//         add([
//             sprite("no_mark"),
//             posify(570, 300),
//             anchor("center"),
//             scale(0.1),
//             area(),
//         ]),
//         add([
//             posify(580, 390),
//             anchor("center"),
//             color(WHITE),
//             text("Small fish are\n  not present", {
//                 size: 24,
//                 font: "serif",
//             }),
//         ]),
//     ],
// ];

// fish_presence[1][0].hidden = !fish_presence[1][0].hidden;
// fish_presence[1][1].hidden = !fish_presence[1][1].hidden;
// var is_small_fish_present = true;

// function switch_small_fish_presence() {
//     fish_presence[0][0].hidden = !fish_presence[0][0].hidden;
//     fish_presence[0][1].hidden = !fish_presence[0][1].hidden;

//     fish_presence[1][0].hidden = !fish_presence[1][0].hidden;
//     fish_presence[1][1].hidden = !fish_presence[1][1].hidden;

//     is_small_fish_present = !is_small_fish_present;
// }

// loadSprite("shark", "https://raw.githubusercontent.com/Ninjago77/genetictech/main/sprites/predators/shark.png");
// loadSprite("whale", "https://raw.githubusercontent.com/Ninjago77/genetictech/main/sprites/predators/whale.png");
// loadSprite("eyesight", "https://raw.githubusercontent.com/Ninjago77/genetictech/main/sprites/senses/eyesight.png");
// loadSprite("hearing", "https://raw.githubusercontent.com/Ninjago77/genetictech/main/sprites/senses/hearing.png");

// const predators = [
//     [
//         add([
//             sprite("shark"),
//             posify(400, 350),
//             anchor("center"),
//             scale(0.3),
//             area(),
//         ]),
//         add([
//             sprite("eyesight"),
//             posify(330, 420),
//             anchor("center"),
//             scale(0.33),
//             area(),
//         ]),
//         add([
//             posify(410, 490),
//             anchor("center"),
//             color(WHITE),
//             text(" Medium Sized Predator\nthat uses eyesight to hunt\n (ex. Great White Shark)", {
//                 size: 24,
//                 font: "serif",
//             }),
//         ]),
//     ],
//     [
//         add([
//             sprite("whale"),
//             posify(400, 350),
//             anchor("center"),
//             scale(0.4),
//             area(),
//         ]),
//         add([
//             sprite("hearing"),
//             posify(350, 320),
//             anchor("center"),
//             scale(0.33),
//             area(),
//         ]),
//         add([
//             posify(410, 490),
//             anchor("center"),
//             color(WHITE),
//             text("   Large Predator that\n  uses echolocation to\nhunt (ex. Toothed Whale)", {
//                 size: 24,
//                 font: "serif",
//             }),
//         ]),
//     ],
// ];
// predators[1][0].hidden = !predators[1][0].hidden;
// predators[1][1].hidden = !predators[1][1].hidden;
// predators[1][2].hidden = !predators[1][2].hidden;
// var is_shark = true;

// function switch_predator() {
//     predators[0][0].hidden = !predators[0][0].hidden;
//     predators[0][1].hidden = !predators[0][1].hidden;
//     predators[0][2].hidden = !predators[0][2].hidden;

//     predators[1][0].hidden = !predators[1][0].hidden;
//     predators[1][1].hidden = !predators[1][1].hidden;
//     predators[1][2].hidden = !predators[1][2].hidden;

//     is_shark = !is_shark;
// }

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