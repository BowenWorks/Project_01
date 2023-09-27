// Array of possible colors
const colors = ['#2C3333', '#395B64', '#142850', '#2ecc71', '#0C7B93', '#395B64', '#769FCD', '#88304E'];

// Function to get a random color from the array
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Add mouseenter event listener to set the random color and keep it
const cardContainers = document.querySelectorAll('.card-container');

cardContainers.forEach((container) => {
  const cardTitle = container.querySelector('.card-title');
  const cardImage = container.querySelector('.tile-image');
  let randomColor;

  container.addEventListener('mouseenter', function () {
    randomColor = getRandomColor();
    cardTitle.style.color = randomColor;
  });

  container.addEventListener('mouseleave', function () {
    cardTitle.style.color = randomColor;
  });
});
