function calculateParallelogramArea() {
  /*   //get base of the parallelogram
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
  parallelogramAreaSpan.innerText = area; */
  // const base = getParallelogramBase();
}
// create a common function

// function getParallelogramBase() {
//   const baseInput = document.getElementById("parallelogram-base");
//   const baseText = baseInput.value;
//   const base = parseFloat(baseText);
//   return base;
// }

function calculateParallelogramArea() {
  const base = getInputValuebyId("parallelogram-base");
  // console.log("base value is: ", base);
  const height = getInputValuebyId("parallelogram-height");
  // console.log("height value is: ", height);
  const area = base * height;
  setInnerTextById("parallelogram-area", area);
}

function getInputValuebyId(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
  return inputValue;
}

function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
