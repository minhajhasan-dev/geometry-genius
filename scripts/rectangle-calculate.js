function calculateRectangleArea() {
  //get length of the input
  const lengthInput = document.getElementById("rectangle-length");
  const lengthText = lengthInput.value;
  const length = parseFloat(lengthText);
  // get height of the rectangle
  const heightInput = document.getElementById("rectangle-height");
  const heightText = heightInput.value;
  const height = parseFloat(heightText);
  //calculation steps here
  const area = length * height;
  // set the value of calculation
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = area;
}
