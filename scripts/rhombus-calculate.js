function calculateRhombusArea() {
  // Get the length of the diagonals of the rhombus
  const diagonal1Input = document.getElementById("rhombus-dia1");
  const diagonal1Text = diagonal1Input.value;
  const diagonal1 = parseFloat(diagonal1Text);

  const diagonal2Input = document.getElementById("rhombus-dia2");
  const diagonal2Text = diagonal2Input.value;
  const diagonal2 = parseFloat(diagonal2Text);

  // Calculation steps here
  const area = 0.5 * diagonal1 * diagonal2;

  // Set the value of the calculated area
  const rhombusAreaSpan = document.getElementById("rhombus-area");
  rhombusAreaSpan.innerText = area;
}
