const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');


//settings object
const S = {
    width: 800,
    height: 800,
    cols: 4,
    rows: 4,
    noiseDetail: 2,
    pointRatio: 2,
    yScale: 1,
    xScale: 1,
    noiseScale: 50,
    noiseSeed: Math.floor(Math.random() * 9999),
    palette: Palette.coolorPalette(urls[Math.floor(Math.random() * urls.length)]),
    ease: easing[Math.floor(Math.random() * easing.length)]
}
S.noise = tooloud.Perlin.create(S.noiseSeed);

let grid = [];

function draw() {
    canvas.width = S.width;
    canvas.height = S.height;

    bg(255, 255, 255);

    //const totalPoints = S.width * S.height * S.pointRatio;
    const gridWidth = S.width / S.cols;
    const gridHeight = S.height / S.rows;
    // const ppg = Math.round(totalPoints / (S.cols * S.rows));

    for (let i = 0; i < S.cols; i++) {
        let x = i * gridWidth;

        for (let j = 0; j < S.rows; j++) {
            let y = j * gridHeight;
            grid.push(new GridSquare(x, y, gridWidth, gridHeight));
        }
    }

    for (let g of grid) {
        g.draw(10000, S);
    }
}
