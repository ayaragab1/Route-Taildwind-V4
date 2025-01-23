document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "./images/fabian-irsara-67l-QujB14w-unsplash.jpg",
    "./images/bg2.jpg",
    "./images/christopher-gower-m_HRfLhgABo-unsplash.jpg",
    "./images/ales-nesetril-Im7lZjxeLhg-unsplash-EFNYJM67.jpg",
    "./images/testtwo.jpg",
  ];

  let currentIndex = 0;

  const slidesContainer = document.getElementById("slides");
  const currentIndexSpan = document.getElementById("currentIndex");
  const totalImagesSpan = document.getElementById("totalImages");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  // Set total images count
  totalImagesSpan.textContent = images.length;

  // Render slides
  images.forEach((image, index) => {
    const figure = document.createElement("figure");
    figure.className = `absolute inset-0 w-full h-full transition-opacity duration-500 ${
      index === 0 ? "opacity-100 z-10" : "opacity-0 z-0"
    }`;

    const img = document.createElement("img");
    img.src = image;
    img.alt = `Image ${index + 1}`;
    img.className = "h-full w-screen object-cover";

    figure.appendChild(img);
    slidesContainer.appendChild(figure);
  });

  const updateSlides = () => {
    const figures = slidesContainer.querySelectorAll("figure");

    figures.forEach((figure, index) => {
      if (index === currentIndex) {
        figure.classList.add("opacity-100", "z-10");
        figure.classList.remove("opacity-0", "z-0");
      } else {
        figure.classList.add("opacity-0", "z-0");
        figure.classList.remove("opacity-100", "z-10");
      }
    });

    currentIndexSpan.textContent = currentIndex + 1;
  };

  // Event listeners for buttons
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlides();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlides();
  });

  // Initialize the first slide
  updateSlides();




  
});


// Dark Mode Handling
var darkBtn = document.querySelector("#darkModeToggle");

// Event listener for the dark mode toggle button
darkBtn.addEventListener("click", () => {
  var currentTheme = localStorage.theme;

  // Toggle the theme in localStorage
  if (currentTheme === "dark") {
    localStorage.theme = "light";
  } else {
    localStorage.theme = "dark";
  }
  
  getMode();
});

getMode();

function getMode() {
  const isDark =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  document.documentElement.classList.toggle("dark", isDark);

  darkBtn.innerHTML = isDark ? "Light Mode" : "Dark Mode";
}
