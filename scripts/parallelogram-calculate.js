function calculateParallelogramArea() {
  //get base of the parallelogram
  const baseInput = document.getElementById("parallelogram-base");
  const baseText = baseInput.value;
  const base = parseFloat(baseText);
  // get height of the parallelogram
  const heightInput = document.getElementById("parallelogram-height");
  const heightText = heightInput.value;
  const height = parseFloat(heightText);
  //calculation steps here
  const area = base * height;
  // set the value of calculation
  const parallelogramAreaSpan = document.getElementById("parallelogram-area");
  parallelogramAreaSpan.innerText = area;
}
