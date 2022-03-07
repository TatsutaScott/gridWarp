class Palette {
    constructor(a) {
        if (arguments.length == 0) {

        }
        if (Array.isArray(a)) {
            this.colors = a;
            this.weighted = randomizeWeighting(a);
        }
        if (typeof (a) == 'string') {
            let colorsArray = Palette.coolorPalette(a);
            this.colors = colorsArray;
            this.weighted = randomizeWeighting(colorsArray);
        }
    }

    static coolorPalette(url) {
        let slashIndex = url.lastIndexOf("/");
        let colStr = url.slice(slashIndex + 1);
        let cols = colStr.split("-");
        for (let i = 0; i < cols.length; i++) cols[i] = "#" + cols[i];
        for (let i = 0; i < cols.length; i++) {
            let c = cols[i];
            cols[i] = c;
        }
        return cols;
    }

    static interpolate(a, b, interp) {
        const c1 = !Array.isArray(a) ? hexToRGB(a) : a;
        const c2 = !Array.isArray(b) ? hexToRGB(b) : b;
        const c3 = [];
        for (let i = 0; i < c1.length; i++) {
            c3.push(c1[i] + (c2[i] - c1[i]) * interp);
        }
        return c3;
    }

    print() {
        for (let c of this.colors) {
            console.log(c)
        }
    }
    addColor(color) {
        this.colors.push(color);
        this.weighted = randomWeights(this.colors);
    }

    random() {
        const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        return randomColor;
    }

    weightedRandom() {
        const randomColor = this.weighted[Math.floor(Math.random() * this.weighted.length)];
        return randomColor;
    }

}

function randomizeWeighting(arr) {
    const weighted = [];
    for (let index of arr) {
        const randomWeighting = Math.floor(Math.random() * 100);
        for (let i = 0; i < randomWeighting; i++) {
            weighted.push(index);
        }
    }
    return weighted;
}

function hexToRGB(hex) {
    const rHex = hex.slice(1, 3);
    const gHex = hex.slice(3, 5);
    const bHex = hex.slice(5, 7);
    const rgb = [
        parseInt(rHex, 16),
        parseInt(gHex, 16),
        parseInt(bHex, 16)
    ];
    return rgb;
}

//Utility functions 
function bg(r, g, b) {
    c.fillStyle = `rgb(${r}, ${g}, ${b})`;
    c.fillRect(0, 0, S.width, S.height);
}

// //--------------------------USEFUL VARBIABLES--------------------------//
// //list of selected Coolerp palettes
const urls = [
    'https://coolors.co/4381c1-bdadea-bea2c2-a37871-4e4b5c-e4fde1-6b2737-113537-042a2b-54f2f2',
    'https://coolors.co/f7dba7-f1ab86-c57b57-1e2d2f-041f1e-9a4c95-4d2d52-1d1a31-607744-34623f',
    'https://coolors.co/000501-73ab84-99d19c-79c7c5-ade1e5-eb9486-7e7f9a-a690a4-6b2737-e08e45',
    'https://coolors.co/022f40-38aecc-0090c1-183446-046e8f-eee5e9-ba2d0b-ff4365-fffff3-499f68',
    'https://coolors.co/4381c1-bdadea-bea2c2-a37871-4e4b5c-edcb96-090809-f40000-f44e3f-72195a',
    'https://coolors.co/17301c-379392-4fb0c6-4f86c6-744fc6-fcecc9-fcb0b3-f93943-df2935-f5f3bb',
    'https://coolors.co/6a8d73-f4fdd9-e4ffe1-ffe8c2-f0a868-512d38-b27092-f4bfdb-161032-e06d06',
    'https://coolors.co/2e6171-556f7a-798086-b79fad-d4afcd-f87666-f6f5ae-f5f749-f24236-f18f01',
    'https://coolors.co/bbd8b3-f3b61f-a29f15-510d0a-191102-153243-284b63-ef6461-313638-a491d3',
    'https://coolors.co/000501-73ab84-99d19c-79c7c5-ade1e5-e8998d-eed2cc-a1683a-2e86ab-f24236',
    'https://coolors.co/504746-b89685-bfada3-fbb7c0-b6244f-119da4-0c7489-06d6a0-d741a7-30c5ff',
    'https://coolors.co/483c46-3c6e71-70ae6e-beee62-f4743b-f02d3a-dd0426-eadeda-ffd400-faa916',
    'https://coolors.co/c9daea-03f7eb-00b295-191516-ab2346-b20d30-c17817-000500-362417-686868',
    'https://coolors.co/8b9474-6cae75-8bbd8b-c1cc99-f5a65b-af3e4d-312f2f-a6d9f7-bf98a0-006e90',
    'https://coolors.co/666a86-788aa3-92b6b1-b2c9ab-e8ddb5-04773b-036016-03440c-ffb997-f67e7d',
    'https://coolors.co/000000-7f95d1-ff82a9-ffc0be-ffebe7-f49d37-eafdf8-f4f4f6-ffffff-faf2a1',
    'https://coolors.co/271f30-6c5a49-c8ad55-d0fcb3-9bc59d-00fddc-ff5666-1efc1e-bbbac6-8b85c1',
    'https://coolors.co/1b2f33-28502e-47682c-8c7051-ef3054-f5f0f6-d7b377-d7263d-f46036-c5d86d',

];