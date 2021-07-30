import { hsl2rgb } from "./rgb";
new WebAssembly.Memory({ initial: 10, maximum: 100 });
(async () => {
  const wrapper = document.getElementById("wrapper") as HTMLDivElement;
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;

  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  const thread = 16;

  const init = async () => {
    console.time("loop time");
    setCanvasSize();
    let pxPer = 6 / canvas.width;
    for (let i = 0; i < 600; i++) {
      pxPer = pxPer / 1.5;

      await draw(pxPer);
    }

    console.timeEnd("loop time");
  };

  const draw = async (pxPer: number) => {
    const centerX = -1.2622216276238453;
    const centerY = -0.0459170016351388;
    const promises = [];
    for (let i = 0; i < thread; i++) {
      const worker = new Worker(new URL("./test.worker.ts", import.meta.url));
      worker.postMessage({
        width: canvas.width,
        height: canvas.height,
        thread,
        pxPer,
        centerX,
        centerY,
        i,
      });
      const promise = new Promise((resolve) => {
        worker.addEventListener("message", ({ data }) => resolve(data));
      });
      promises.push(promise);
    }
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    const pxs = (await Promise.all(promises)).flat(1) as number[][];
    pxs.forEach((ary, x) =>
      ary.forEach((color, y) => {
        const base = (y * imageData.width + x) * 4;
        if (color !== 0) {
          pixels[base] = (color * 5) % 255;
          pixels[base + 1] = (color * 5) % 255;
          pixels[base + 2] = (color * 4) % 255;
          pixels[base + 3] = 255;
        } else {
          pixels[base] = 255;
          pixels[base + 1] = 255;
          pixels[base + 2] = 255;
          pixels[base + 3] = 255;
        }
      })
    );

    ctx.putImageData(imageData, 0, 0);
  };

  /*const draw = (pxPer: number) => {
    const { width, height } = ctx.canvas;
    //
    for (let x = 0; x < width; x += 1) {
      for (let y = 0; y < height; y += 1) {
        const a = (x - width / 2) * pxPer + centerX;
        const b = (y - height / 2) * pxPer + centerY;

        const isDivergence = check_divergence(a, b, 4096);
        if (isDivergence !== 0) {
          ctx.fillStyle = `hsl(${isDivergence * 8},80%,50%)`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
  };*/

  const setCanvasSize = () => {
    canvas.style.height = wrapper.offsetHeight.toString() + "px";
    canvas.height = wrapper.offsetHeight;
    canvas.width = wrapper.offsetWidth;
  };

  init();
})();
export {};
