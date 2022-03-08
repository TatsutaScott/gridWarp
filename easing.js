const pow = Math.pow;
const sqrt = Math.sqrt;
const sin = Math.sin;
const cos = Math.cos;
const PI = Math.PI;
const c1 = 1.70158;
const c2 = c1 * 1.525;
const c3 = c1 + 1;
const c4 = (2 * PI) / 3;
const c5 = (2 * PI) / 4.5;

let linear = (x) => x;
let inQuad = (x) => x * x;
let outQuad = (x) => 1 - (1 - x) * (1 - x);
let inOutQuad = (x) => x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
let inCubic = (x) => x * x * x;
let outCubic = (x) => 1 - pow(1 - x, 3);
let inOutCubic = (x) => x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
let inQuart = (x) => x * x * x * x;
let outQuart = (x) => 1 - pow(1 - x, 4);
let inOutQuart = (x) => x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
let inQuint = (x) => x * x * x * x * x;
let outQuint = (x) => 1 - pow(1 - x, 5);
let inOutQuint = (x) => x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
let inSine = (x) => 1 - cos((x * PI) / 2);
let outSine = (x) => sin((x * PI) / 2);
let inOutSine = (x) => -(cos(PI * x) - 1) / 2;
let inExpo = (x) => x === 0 ? 0 : pow(2, 10 * x - 10);
let outExpo = (x) => x === 1 ? 1 : 1 - pow(2, -10 * x);
let inOutExpo = (x) => {
    if (x === 0) {
        return 0;
    } else if (x == 1) {
        return 1;
    } else if (x < 0.5) {
        return pow(2, 20 * x - 10) / 2;
    } else {
        return (2 - pow(2, -20 * x + 10)) / 2;
    }
};
let inCirc = (x) => 1 - sqrt(1 - pow(x, 2));
let outCirc = (x) => sqrt(1 - pow(x - 1, 2));
let inOutCirc = (x) => {
    if (x < 0.5) {
        return (1 - sqrt(1 - pow(2 * x, 2))) / 2;
    } else {
        (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
    }
};
let inBack = (x) => c3 * x * x * x - c1 * x * x;
let outBack = (x) => 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
let inOutBack = (x) => {
    if (x < 0.5) {
        return (pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2;
    } else {
        return (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    }
};
let inElastic = (x) => {
    if (x === 0) {
        return 0;
    } else if (x === 1) {
        return 1;
    } else {
        return -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
    }
};
let outElastic = (x) => {
    if (x === 0) {
        return 0;
    } else if (x === 1) {
        return 1;
    } else {
        return pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
    }
};
let inOutElastic = (x) => {
    if (x === 0) {
        return 0;
    } else if (x === 1) {
        return 1;
    } else if (x < 0.5) {
        return -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2;
    } else {
        return (pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5)) / 2 + 1;
    }
};
let outBounce = (x) => {
    const n1 = 7.5625;
    const d1 = 2.75;

    if (x < 1 / d1) {
        return n1 * x * x;
    } else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
        return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
};

let inBounce = (x) => 1 - outBounce(1 - x);
let easeInOutBounce = (x) => {
    if (x < 0.5) {
        return (1 - outBounce(1 - 2 * x)) / 2
    } else {
        return (1 + outBounce(2 * x - 1)) / 2;
    }
};
const easing = [
    linear,
    inQuad,
    outQuad,
    inOutQuad,
    inCubic,
    outCubic,
    inOutCubic,
    inQuart,
    outQuart,
    inOutQuart,
    inQuint,
    outQuint,
    inOutQuint,
    inSine,
    outSine,
    inOutSine,
    inExpo,
    outExpo,
    inOutExpo,
    inCirc,
    outCirc,
    inOutCirc,
    inBack,
    outBack,
    inOutBack,
    inElastic,
    outElastic,
    inOutElastic,
    outBounce,
    inBounce,
    easeInOutBounce
];
