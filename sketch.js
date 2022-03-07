const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

const renderButton = document.getElementById('render');
const download = document.getElementById('download');

const widthSlider = document.getElementById('width');
const heightSlider = document.getElementById('height');
const colSlider = document.getElementById('cols');
const rowSlider = document.getElementById('rows');
const nDetailSlider = document.getElementById('nDetail');
const pointSlider = document.getElementById('points');
const xScaleSlider = document.getElementById('xScale');
const yScaleSlider = document.getElementById('yScale');
const noiseScaleSlider = document.getElementById('noiseScale');
const easeSelect = document.getElementById('ease');
const settingsDiv = document.getElementById('options');
const hideButton = document.getElementById('hide');
let settingOnOff = true;


for (let i = 0; i < easing.length; i++) {
    var opt = document.createElement("option");
    opt.value = i;
    opt.innerHTML = easing[i].name;
    easeSelect.appendChild(opt);
}

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

    const totalPoints = S.width * S.height * S.pointRatio;
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

widthSlider.addEventListener('change', () => { S.width = widthSlider.value; });
heightSlider.addEventListener('change', () => { S.height = heightSlider.value; });
colSlider.addEventListener('change', () => { S.cols = colSlider.value; });
rowSlider.addEventListener('change', () => { S.rows = rowSlider.value; });
nDetailSlider.addEventListener('change', () => { S.noiseDetail = nDetailSlider.value; });
pointSlider.addEventListener('change', () => { S.pointRatio = pointSlider.value; });
xScaleSlider.addEventListener('change', () => { S.xScale = xScaleSlider.value; });
yScaleSlider.addEventListener('change', () => { S.yScale = yScaleSlider.value; });
noiseScaleSlider.addEventListener('change', () => { S.noiseScale = noiseScaleSlider.value; });
easeSelect.addEventListener('change', () => { S.ease = easing[easeSelect.value] });
hideButton.addEventListener('click', () => {
    settingOnOff = !settingOnOff;
    let vis = settingOnOff ? 'visible' : 'hidden';
    settingsDiv.style.visibility = vis;
});

download.addEventListener('click', function (e) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();

    const link = document.createElement('a');
    link.download = `${year}.${month}.${day}_grid.png`;
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
});

draw();

dragElement(document.getElementById('settings'));
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}