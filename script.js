var movies = [];
var ind = 0;

const addButton = document.getElementById("add");
addButton.addEventListener("click", clickAddMovie);

const addSubmit = document.getElementById("submit-form1");
addSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  addMovie();
});

class Movie {
  constructor(title, director, year, watched) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.watched = watched;
  }
  indexOfMovie;
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

function changeWatched(e) {
  const changeAtIndex = e.currentTarget.i;
  const changeNode = e.currentTarget.parentElement;

  movies[changeAtIndex].changeWatchStatus();
  removeAllMovies();
  renderAllMovies();
}

function removeAllMovies() {
  const myNode = document.getElementById("main");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}

function addMovie() {
  let title = document.getElementById("title").value;
  let director = document.getElementById("director").value;
  let year = document.getElementById("year").value;
  let watched = document.getElementById("watched").checked;
  if (title != "") {
    let newMovie = new Movie(title, director, year, watched);
    calculateIndex(newMovie);
    movies.push(newMovie);
    ind++;
    document.getElementById("add-form").classList.add("invis");
    clearFields();
    logAllMovies();
    renderAddedMovie(ind);
  }
}

function clearFields() {
  document.getElementById("title").value = "";
  document.getElementById("director").value = "";
  document.getElementById("year").value = "";
  document.getElementById("watched").checked = false;
}

function calculateIndex(ob) {
  ob.indexOfMovie = movies.length;
}

function logAllMovies() {
  movies.forEach((e) => {
    const n = document.createElement("div");
    console.log(e);
  });
}

function clickAddMovie() {
  document.getElementById("add-form").classList.remove("invis");
}

function removeMovie(e) {
  const deleteAtIndex = e.currentTarget.i;
  const deleteNode = e.currentTarget.parentElement;
  movies.splice(deleteAtIndex, 1);
  movies.forEach((element, index) => {
    if (index >= deleteAtIndex) {
      element.indexOfMovie -= 1;
    }
  });
  ind--;
  deleteNode.remove();
  console.log(movies);
}

function renderAllMovies() {
  movies.forEach((element, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const titleText = document.createElement("div");
    titleText.classList.add("title");
    titleText.innerHTML = element.title;
    const directorText = document.createElement("div");
    directorText.classList.add("director");
    directorText.innerHTML = element.director;
    const yearText = document.createElement("div");
    yearText.classList.add("year");
    yearText.innerHTML = element.year;
    const wB = document.createElement("button");
    wB.classList.add("watch-button");
    wB.innerHTML = "watched?";
    wB.addEventListener("click", changeWatched);
    wB.i = index;

    const watchedText = document.createElement("div");
    watchedText.classList.add("watched");
    watchedText.innerHTML = element.watched ? "Watched" : "Not Watched";
    const deleteM = document.createElement("button");
    deleteM.classList.add("delete");
    deleteM.addEventListener("click", removeMovie);
    deleteM.i = index;

    card.appendChild(titleText);
    card.appendChild(directorText);
    card.appendChild(yearText);
    card.appendChild(wB);
    card.appendChild(watchedText);
    card.appendChild(deleteM);

    const main = document.getElementById("main");
    main.appendChild(card);
  });
}

function renderAddedMovie() {
  // const d = document.getElementsByClassName("card");
  // d.remove();
  movies.forEach((element, index) => {
    // console.log(ind, index);
    if (ind - index == 1) {
      const card = document.createElement("div");
      card.classList.add("card");
      const titleText = document.createElement("div");
      titleText.classList.add("title");
      titleText.innerHTML = element.title;
      const directorText = document.createElement("div");
      directorText.classList.add("director");
      directorText.innerHTML = element.director;
      const yearText = document.createElement("div");
      yearText.classList.add("year");
      yearText.innerHTML = element.year;
      const wB = document.createElement("button");
      wB.classList.add("watch-button");
      wB.innerHTML = "watched?";
      wB.addEventListener("click", changeWatched);
      wB.i = index;

      const watchedText = document.createElement("div");
      watchedText.classList.add("watched");
      watchedText.innerHTML = element.watched ? "Watched" : "Not Watched";
      const deleteM = document.createElement("button");
      deleteM.classList.add("delete");
      deleteM.addEventListener("click", removeMovie);
      deleteM.i = index;

      card.appendChild(titleText);
      card.appendChild(directorText);
      card.appendChild(yearText);
      card.appendChild(wB);
      card.appendChild(watchedText);
      card.appendChild(deleteM);

      const main = document.getElementById("main");
      main.appendChild(card);
    }
  });
}
