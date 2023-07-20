// scripts/script.js

// Sample data for user reviews and ratings (replace this with data fetched from API)
const userReviews = [
    {
        user: "User 1",
        rating: 8.0,
        review: "Great movie! I loved it!",
    },
    {
        user: "User 2",
        rating: 7.5,
        review: "Good movie, worth watching!",
    },
    // Add more user reviews and ratings here...
];

// Function to generate user reviews and ratings dynamically
function generateUserReviews() {
    const movieInfo = document.querySelector(".movie-info");

    userReviews.forEach((review) => {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("user-review");

        reviewElement.innerHTML = `
        <h4>${review.user}</h4>
        <p>Rating: ${review.rating}</p>
        <p>${review.review}</p>
      `;

        movieInfo.appendChild(reviewElement);
    });
}

// Call the function to generate user reviews when the page loads
document.addEventListener("DOMContentLoaded", generateUserReviews);
// scripts/script.js

function generateMovieCards() {
    // ...

    movies.forEach((movie) => {
        // ...

        // Add a click event listener to navigate to the movie details page
        movieCard.addEventListener("click", () => {
            // Replace "movie-details.html" with the actual URL of the movie details page
            window.location.href = "movie-details.html";
        });

        movieGrid.appendChild(movieCard);
    });
}
