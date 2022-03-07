class GridSquare {
    constructor(x, y, w, h, c = '#86A397') {
        this.position = new Vec(x, y);
        this.width = w;
        this.height = h;
        this.color = c;
    }

    draw(points, settings) {
        for (let i = 0; i < points; i++) {
            c.strokeStyle = this.color;

            const randomOffset = new Vec(
                Math.random() * (this.width * settings.xScale),
                Math.random() * (this.height * settings.yScale)
            );

            const pos = Vec.add(this.position, randomOffset);
            const theta = settings.ease(
                settings.noise.noise(
                    pos.x / (settings.width / settings.noiseDetail),
                    pos.y / (settings.height / settings.noiseDetail)
                    , 0)) * Math.PI * 2;

            const nOff = Vec.fromAngle(theta).mult(Math.random() * theta * settings.noiseScale);

            pos.add(nOff);
            pos.draw();
        }
    }
}