const API_KEY = '21d2dc7741fcd91604b0d0b0c8d58779'; 
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

const moviesContainer = document.getElementById('movies-container');
const profileSelect = document.getElementById('profile-select');

const profiles = {
    profile1: {
        name: "Profile 1",
        favoriteMovies: [], // Add favorite movies or other profile data here
    },
    profile2: {
        name: "Profile 2",
        favoriteMovies: [], // Add favorite movies or other profile data here
    },
    profile3: {
        name: "Profile 3",
        favoriteMovies: [], // Add favorite movies or other profile data here
    },
};

profileSelect.addEventListener('change', (event) => {
    const selectedProfile = event.target.value;
    updateProfile(selectedProfile);
});

function updateProfile(profileKey) {
    const profile = profiles[profileKey];
    console.log(`Switched to ${profile.name}`);
    // Update the UI based on the selected profile
    // For example, load favorite movies for the selected profile
    // or change the displayed name, etc.
    fetchMovies(); // Optionally, refresh the movie list
}

async function fetchMovies() {
    const response = await fetch(API_URL);
    const data = await response.json();
    const movies = data.results;

    moviesContainer.innerHTML = ''; // Clear existing movies

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        const moviePoster = document.createElement('img');
        moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        moviePoster.alt = movie.title;

        movieElement.appendChild(moviePoster);
        moviesContainer.appendChild(movieElement);
    });
}

// Load the default profile and movies on page load
updateProfile('profile1');
