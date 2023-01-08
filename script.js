var movies = [];
var ind = 69;
class Movie {
  constructor(title, director, year, watched) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.watched = watched;
  }
  index;
  info() {
    console.log(
      "Movie name - " +
        this.title +
        ", Directed by " +
        this.director +
        ", released in " +
        this.year +
        ", watched : " +
        this.watched +
        ", index -" +
        this.i
    );
  }
  changeWatchStatus() {
    if (this.watched == true) {
      this.watched = false;
    } else this.watched = true;
  }
}

const shamble = new Movie("shamble", "alexandar", "2022", true);
calculateIndex(shamble);
movies.push(shamble);

const target = document.getElementById("");

function addMovie() {
  let title = "x";
  let director = "y";
  let year = "z";
  let watched = true;
  let newMovie = new Movie(title, director, year, watched);
  calculateIndex(newMovie);
  movies.push(newMovie);
}

function calculateIndex(ob) {
  ob.index = movies.length;
}

function renderAllMovies() {
  movies.forEach((e) => {
    const n = document.createElement("div");
    console.log(e);
  });
}

addMovie();
renderAllMovies();
