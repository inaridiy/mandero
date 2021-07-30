(async () => {
  const { check_divergence } = await import("../pkg");
  addEventListener("message", (e) => {
    console.log(e.data.data.i);
  });
})();
