const container = document.getElementById("grid");

function createGrid(rows, cols) {
  const containerSize = container.clientWidth;

  const squareSize = containerSize / Math.max(cols, rows);

  for (let i = 0; i < rows * cols; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", "square-" + i);

    square.style.backgroundColor = "white";
    square.style.border = "1px solid #222222";
    square.style.boxSizing = "border-box";
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = getRandomColor();
    });

    container.appendChild(square);
  }
}

function getRandomColor() {
  const range = "0123456789ABCDEF";
  const rangeArray = range.split("");

  return (
    "#" +
    Array.from(
      { length: 6 },
      () => rangeArray[Math.floor(Math.random() * rangeArray.length)]
    ).join("")
  );
}

createGrid(16, 16);

const button = document.getElementById("button");

button.addEventListener("click", function getSize(size) {
  size = prompt("Select new size (0-100");
  container.innerHTML = "";

  if (size > 0 && size <= 100) {
    createGrid(size, size);
  } else {
    createGrid(16, 16);
  }
});
