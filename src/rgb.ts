export const hsl2rgb = (hs: number, s: number, l: number) => {
  var max = l + (s * (1 - Math.abs(2 * l - 1))) / 2;
  var min = l - (s * (1 - Math.abs(2 * l - 1))) / 2;

  const h = hs % 360;
  var rgb = [0, 0, 0];
  var i = Math.floor(h / 60);

  switch (i) {
    case 0:
    case 6:
      rgb = [max, min + (max - min) * (h / 60), min];
      break;

    case 1:
      rgb = [min + (max - min) * (120 - h / 60), max, min];
      break;

    case 2:
      rgb = [min, max, min + (max - min) * (h - 120 / 60)];
      break;

    case 3:
      rgb = [min, min + (max - min) * (240 - h / 60), max];
      break;

    case 4:
      rgb = [min + (max - min) * (h - 240 / 60), min, max];
      break;

    case 5:
      rgb = [max, min, min + (max - min) * (360 - h / 60)];
      break;
  }

  return rgb.map(function (value) {
    return value * 255;
  });
};
