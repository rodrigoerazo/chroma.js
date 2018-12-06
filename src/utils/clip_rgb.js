const limit = require('./limit');

module.exports = (rgb) => {
    rgb._clipped = false;
    rgb._unclipped = rgb.slice(0);
    for (let i=0; i<=3; i++) {
        if (i < 3) {
            rgb._clipped = rgb[i] < 0 || rgb[i] > 255;
            rgb[i] = limit(rgb[i], 0, 255);
        } else if (i === 3) {
            rgb[i] = limit(rgb[i], 0, 1);
        }
    }
};
