const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

//settings object
let S = {
    width: 800,
    height: 800,
    cols: 4,
    rows: 4,
    noiseDetail: 2,
    pointRatio: 0.5,
    ppf: 1000, //points per frame
    yScale: 1,
    xScale: 1,
    noiseScale: 50,
    noiseSeed: Math.floor(Math.random() * 9999),
    palette: new Palette(urls[Math.floor(Math.random() * urls.length)]),
    ease: easing[Math.floor(Math.random() * easing.length)]
}
S.noise = tooloud.Perlin.create(S.noiseSeed);
let grid = [];

function setup() {
    canvas.width = S.width;
    canvas.height = S.height;

    bg(255, 255, 255);

    const gridWidth = S.width / S.cols;
    const gridHeight = S.height / S.rows;

    for (let i = 0; i < S.cols; i++) {
        let x = i * gridWidth;

        for (let j = 0; j < S.rows; j++) {
            let y = j * gridHeight;
            grid.push(new GridSquare(x, y, gridWidth, gridHeight, S.palette.weightedRandom()));
        }
    }
}

function draw(looping) {
    const totalPoints = looping ? S.ppf : S.width * S.height * S.pointRatio;
    const ppg = Math.round(totalPoints / (S.cols * S.rows)) + 1; //points per grid

    for (let g of grid) {
        g.draw(ppg, S);
    }
}

setup();
draw(false);
