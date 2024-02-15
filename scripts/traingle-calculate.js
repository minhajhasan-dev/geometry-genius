/* 
objective: get base, height of a triangle 

*/

function calculateTriangleArea() {
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  // get triangle height value
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);

  // calculate triangle are
  const area = 0.5 * base * height;
  console.log("area of the triangle is:", area);

  // display triangle area
  const triangleAreaSpan = document.getElementById("triangle-area");
  triangleAreaSpan.innerText = area;
}
