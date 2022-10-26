let sim_1 = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 f 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
`,SpriteKind.Player)
let sim_2 = sprites.create(img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 f 4 4 4 4 f 4 4 4 4 4
    4 4 4 4 4 f 4 4 4 4 f 4 4 4 4 4
    4 4 4 4 4 f 4 4 4 4 f 4 4 4 4 4
    4 4 4 4 4 f 4 4 4 4 f 4 4 4 4 4
    4 4 4 4 4 f 4 4 4 4 f 4 4 4 4 4
    4 4 4 4 4 f 4 4 4 4 f 4 4 4 4 4
    4 4 4 4 4 f 4 4 4 4 f 4 4 4 4 4
    4 4 4 4 4 f 4 4 4 4 f 4 4 4 4 4
    4 4 4 4 4 f 4 4 4 4 f 4 4 4 4 4
    4 4 4 4 4 f 4 4 4 4 f 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
`, SpriteKind.Player)
let sim_3 = sprites.create(img`
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 f 5 5 5 5 f 5 5 5 f 5 5 5
    5 5 5 f 5 5 5 5 f 5 5 5 f 5 5 5
    5 5 5 f 5 5 5 5 f 5 5 5 f 5 5 5
    5 5 5 f 5 5 5 5 f 5 5 5 f 5 5 5
    5 5 5 f 5 5 5 5 f 5 5 5 f 5 5 5
    5 5 5 f 5 5 5 5 f 5 5 5 f 5 5 5
    5 5 5 f 5 5 5 5 f 5 5 5 f 5 5 5
    5 5 5 f 5 5 5 f 5 5 5 5 f 5 5 5
    5 5 5 f 5 5 5 5 5 5 5 5 f 5 5 5
    5 5 f 5 5 5 5 5 5 5 5 5 f 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
`, SpriteKind.Player)
let sim_4 = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 f 3 3 f 3 3 f 3 3 f 3 3
    3 3 3 3 f 3 3 f 3 3 f 3 3 f 3 3
    3 3 3 3 f 3 3 f 3 3 f 3 3 f 3 3
    3 3 3 3 f 3 3 f 3 3 f 3 3 f 3 3
    3 3 3 3 f 3 3 f 3 3 f 3 3 f 3 3
    3 3 3 3 f 3 3 f 3 3 f 3 3 f 3 3
    3 3 3 3 f 3 3 f 3 3 f 3 3 f 3 3
    3 3 3 3 f 3 3 f 3 3 f 3 3 f f 3
    3 3 3 3 f 3 3 f 3 3 f 3 3 f f 3
    3 3 3 3 f 3 f f 3 3 f 3 3 f f 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
`, SpriteKind.Player)
let sim_5 = sprites.create(img`
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
`, SpriteKind.Player)


tiles.setCurrentTilemap(tilemap`level2`)
scene.cameraFollowSprite(sim_1)

tiles.placeOnTile(sim_1, tiles.getTileLocation(3, 7))
tiles.placeOnTile(sim_2, tiles.getTileLocation(3, 7))
tiles.placeOnTile(sim_3, tiles.getTileLocation(3, 7))
tiles.placeOnTile(sim_4, tiles.getTileLocation(3, 7))
tiles.placeOnTile(sim_5, tiles.getTileLocation(3, 7))

sim_1.data = 0
sim_2.data = 1
sim_1.data = 2
sim_4.data = 3
sim_5.data = 4

sim_1.setBounceOnWall(true)
sim_2.setBounceOnWall(true)
sim_3.setBounceOnWall(true)
sim_4.setBounceOnWall(true)
sim_5.setBounceOnWall(true)

scene.onOverlapTile(SpriteKind.Player, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
`, function(sprite: Sprite, location: tiles.Location) {
    evolve(sprite.id)
})

let data_x = [randint(-20, 20), randint(-20, 20), randint(-20, 20), randint(-20, 20), randint(-20, 20),];
let data_y = [randint(-20, 20), randint(-20, 20), randint(-20, 20), randint(-20, 20), randint(-20, 20),];

sim_1.vx = data_x[0]
sim_1.vy = data_y[0]
sim_2.vx = data_x[1]
sim_2.vy = data_y[1]
sim_3.vx = data_x[2]
sim_3.vy = data_y[2]
sim_4.vx = data_x[3]
sim_4.vy = data_y[3]
sim_5.vx = data_x[4]
sim_5.vy = data_y[4]

let winnX = 0
let winnY = 0

function evolve(winner : any) {
winnX = data_x[winner - 0]
winnY = data_y[winner - 0]
    
    data_x = [winnX + randint(-2, 2), winnX + randint(-2, 2), winnX + randint(-2, 2), winnX + randint(-2, 2), winnX + randint(-2, 2),];
    data_y = [winnY + randint(-2, 2), winnY + randint(-2, 2), winnY + randint(-2, 2), winnY + randint(-2, 2), winnY + randint(-2, 2),];
   
    tiles.placeOnTile(sim_1, tiles.getTileLocation(3, 7))
    tiles.placeOnTile(sim_2, tiles.getTileLocation(3, 7))
    tiles.placeOnTile(sim_3, tiles.getTileLocation(3, 7))
    tiles.placeOnTile(sim_4, tiles.getTileLocation(3, 7))
    tiles.placeOnTile(sim_5, tiles.getTileLocation(3, 7))
    
    sim_1.vx = data_x[0]
    sim_1.vy = data_y[0]
    sim_2.vx = data_x[1]
    sim_2.vy = data_y[1]
    sim_3.vx = data_x[2]
    sim_3.vy = data_y[2]
    sim_4.vx = data_x[3]
    sim_4.vy = data_y[3]
    sim_5.vx = data_x[4]
    sim_5.vy = data_y[4]

   

}
