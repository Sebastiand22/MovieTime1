
// API Key și URL-ul API-ului
const apiKey = 'd7474552131f2f0f921c13652e440703'; // înlocuiește cu cheia ta
const apiUrl = 'https://api.themoviedb.org/3';
const imageBaseUrl = 'https://image.tmdb.org/t/p/w200'; // Link-ul pentru imaginile filmelor

// Funcție pentru a obține filmele populare la încărcarea paginii
async function getPopularMovies() {
  const response = await fetch(`${apiUrl}/movie/popular?api_key=${apiKey}`);
  const data = await response.json();
  displayMovies(data.results);
}

// Funcție pentru a căuta un film
async function searchMovies(query) {
  const response = await fetch(`${apiUrl}/search/movie?api_key=${apiKey}&query=${query}`);
  const data = await response.json();
  displayMovies(data.results);
}

// Funcție pentru a afișa filmele
function displayMovies(movies) {
  const movieList = document.getElementById('movieList');
  movieList.innerHTML = '';

  movies.forEach(movie => {
    const movieItem = document.createElement('div');
    movieItem.classList.add('movie-item');

    const movieImage = document.createElement('img');
    movieImage.src = `${imageBaseUrl}${movie.poster_path}`;
    movieImage.alt = movie.title;

    const movieTitle = document.createElement('h3');
    movieTitle.textContent = movie.title;

    movieItem.appendChild(movieImage);
    movieItem.appendChild(movieTitle);
    movieList.appendChild(movieItem);
  });
}

// Event Listeners
document.getElementById('searchButton').addEventListener('click', () => {
  const query = document.getElementById('searchInput').value;
  if (query) {
    searchMovies(query);
  }
});

// Apelează funcția pentru a obține filme populare la deschiderea paginii
getPopularMovies();
