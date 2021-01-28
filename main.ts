//Vector2 object for positioning
class Vector2 {
    x: number;
    y: number;

    constructor (x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

let frames = [[new Vector2(0, 0)]];
let currentFrame = 1;

//function for converting a position to a grid display
function updateGrid(position: Vector2, currentGrid: any){
    return currentGrid;
}

function loadFrame (frame: number) {
    let grid =
    `
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `;
    for (let i = 0; i < frames[frame].length; i) {
    	grid = updateGrid(frames[frame][0], grid);
    }
}

lcd1602.clear();
lcd1602.set_backlight(lcd1602.on_off.on);
basic.forever(function () {
    lcd1602.putString("< " + currentFrame.toString() + " >", 0, 0);
})
