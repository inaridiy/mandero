const window: Worker = self as any;

type msg = {
  width: number;
  height: number;
  pxPer: number;
  centerX: number;
  thread: number;
  centerY: number;
  i: number;
};
const loadMessage: Promise<MessageEvent<msg>> = new Promise((resolve) => {
  window.addEventListener("message", (e: MessageEvent<msg>) => {
    resolve(e);
  });
});

(async () => {
  const [{ check_divergence }, e] = await Promise.all([
    import("../pkg"),
    loadMessage,
  ]);
  const { width, height, thread, i, pxPer, centerX, centerY } = e.data;
  const startX = Math.floor((width / thread) * i);
  const endX = Math.ceil((width / thread) * (i + 1));
  const pxs = new Array(endX - startX).fill(0).map(() => new Array(height));

  for (let x = 0; x < endX - startX; x++) {
    for (let y = 0; y < height; y += 1) {
      const a = (x + startX - width / 2) * pxPer + centerX;
      const b = (y - height / 2) * pxPer + centerY;
      const isDivergence = check_divergence(a, b, 2048);
      pxs[x][y] = isDivergence;
    }
  }

  window.postMessage(pxs);
})();
export {};
