// scripts/script.js

// Sample data for movie cards (replace this with data fetched from API)
const movies = [
  {
    title: "Pathaan",
    poster: "Images/download.jpeg",
    releaseYear: 2023,
    rating: 8.5,
  },
  {
    title: "Dilwale Dulhaniya Le Jayenge",
    poster: "Images/images (4).jpeg",
    releaseYear: 1995,
    rating: 8.2,
  },
  // Add more movie data here...
  {
    title: "Mother India",
    poster: "Images/download (1).jpeg",
    releaseYear: 1957,
    rating: 7.5,
  }, {
    title: "Sholay",
    poster: "Images/images (5).jpeg",
    releaseYear: 1975,
    rating: 9.1,
  }, {
    title: "Lagaan",
    poster: "Images/download (3).jpeg",
    releaseYear: 2001,
    rating: 8.5,
  },
  {
    title: "Rustom",
    poster: "Images/download (2).jpeg",
    releaseYear: 2016,
    rating: 6.8,
  }, {
    title: "Swades",
    poster: "Images/images (6).jpeg",
    releaseYear: 2004,
    rating: 8.2,
  }, {
    title: "Kabali",
    poster: "Images/images (7).jpeg",
    releaseYear: 2016,
    rating: 8.1,
  }, {
    title: "Ramleela",
    poster: "Images/images.jpeg",
    releaseYear: 2013,
    rating: 7.8,
  }, {
    title: "Master",
    poster: "Images/images (1).jpeg",
    releaseYear: 2021,
    rating: 8.5,
  }, {
    title: "Bajirao Mastani",
    poster: "Images/images (2).jpeg",
    releaseYear: 2015,
    rating: 6.5,
  }, {
    title: "Gangs Of Wasseypur",
    poster: "Images/images (3).jpeg",
    releaseYear: 2011,
    rating: 7.5,
  },
];

// Function to generate movie cards dynamically
function generateMovieCards() {
  const movieGrid = document.querySelector(".movie-grid");

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    movieCard.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <h2>${movie.title}</h2>
        <p>Release Year: ${movie.releaseYear}</p>
        <p>Rating: ${movie.rating}</p>
      `;

    // Add a click event listener to navigate to the movie details page
    movieCard.addEventListener("click", () => {
      // Replace "movie-details.html" with the actual URL of the movie details page
      window.location.href = "movie-details/movie-details.html";
    });

    movieGrid.appendChild(movieCard);
  });
}

// Call the function to generate movie cards when the page loads
document.addEventListener("DOMContentLoaded", generateMovieCards);















// scripts/script.js

// Function to toggle the mobile navigation menu
function toggleMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("show-menu");
}

// Add event listener to the hamburger icon
const hamburgerIcon = document.querySelector(".hamburger-icon");
hamburgerIcon.addEventListener("click", toggleMobileMenu);
