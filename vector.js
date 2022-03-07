class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static random(length = 1) {
        const theta = Math.random() * Math.PI * 2;
        const x = length * Math.cos(theta);
        const y = length * Math.sin(theta);
        return new Vec(x, y);
    }

    static fromAngle(theta) {
        const x = Math.cos(theta);
        const y = Math.sin(theta);
        return new Vec(x, y);
    }

    static add(v1, v2) {
        const x = v1.x + v2.x;
        const y = v1.y + v2.y;
        return new Vec(x, y);
    }

    add(a, b) {
        if (arguments.length == 1) {
            this.x += a.x;
            this.y += a.y;
        }

        if (arguments.length == 2) {
            this.x += a;
            this.y += b;
        }
        return this;
    }

    sub(a, b) {
        if (arguments.length == 1) {
            this.x -= a.x;
            this.y -= a.y;
        }

        if (arguments.length == 2) {
            this.x -= a;
            this.y -= b;
        }
        return this;
    }

    mult(a, b) {
        if (arguments.length == 1) {
            this.x *= a;
            this.y *= a;
        }
        return this;
    }

    draw() {
        c.strokeRect(this.x, this.y, 0.001, 0.001);
    }
}