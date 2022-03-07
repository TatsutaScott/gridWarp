//LOL fake jquery
const $ = (id) => document.getElementById(id);

//object holding state values
const state = {
    looping: null,
    settingOnOff: true
}

//buttons
const randB = document.getElementById('random');
$('randPalette').addEventListener('click', () => { S.palette = new Palette(urls[Math.floor(Math.random() * urls.length)]) });
$('fullRender').addEventListener('click', () => {
    setup();
    draw();
});
$('loopRender').addEventListener('click', (e) => {
    if (state.looping) {
        clearInterval(state.looping);
        state.looping = null;
        e.target.innerHTML = 'Loop render';
        $('fullRender').style.display = 'visible';
    } else {
        setup();
        state.looping = setInterval(draw);
        e.target.innerHTML = 'Stop looping';
        $('fullRender').style.visibility = 'hidden';
    }
});
$('download').addEventListener('click', function (e) {
    const date = new Date();
    const link = document.createElement('a');
    link.download = `${date.getFullYear()}.${date.getMonth()}.${date.getDay()}_grid.png`;
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
});

//sliders
$('width').addEventListener('change', (e) => { S.width = e.target.value; });
$('height').addEventListener('change', (e) => { S.height = e.target.value; });
$('cols').addEventListener('change', (e) => { S.cols = e.target.value; });
$('rows').addEventListener('change', (e) => { S.rows = e.target.value; });
$('noiseDetail').addEventListener('change', (e) => { S.noiseDetail = e.target.value; });
$('points').addEventListener('change', (e) => { S.pointRatio = e.target.value; });
$('xScale').addEventListener('change', (e) => { S.xScale = e.target.value; });
$('yScale').addEventListener('change', (e) => { S.yScale = e.target.value; });
$('noiseScale').addEventListener('change', (e) => { S.noiseScale = e.target.value; });
$('ease').addEventListener('change', (e) => { S.ease = easing[e.target.value] });

//adding easing options
for (let i = 0; i < easing.length; i++) {
    var opt = document.createElement("option");
    opt.value = i;
    opt.innerHTML = easing[i].name;
    $('ease').appendChild(opt);
}

//hide and drag options ui
$('hide').addEventListener('click', () => {
    state.settingOnOff = !state.settingOnOff;
    let display = state.settingOnOff ? 'block' : 'none';
    $('options').style.display = display;
});

dragElement($('settings'));
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if ($(elmnt.id + "header")) {
        $(elmnt.id + "header").onmousedown = dragMouseDown;
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