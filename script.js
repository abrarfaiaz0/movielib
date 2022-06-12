


let movies = [
{
    title : "Mulholland Drive",
    year : 2001,
    mlength : "2h 27m",
    director : "David Lynch",
    watched : true
}
]
class Movie {
    constructor(title, year, mlength, director, watched) {
        this.title = title;
        this.year = year;
        this.mlength = mlength;
        this.director = director;
        this.watched = watched;
    }
}



let form = document.getElementById("form");
form.addEventListener("submit", addMovie);

function addMovie(){
    
    // let title = form.getElementById("title");
    // let year = form.getElementById("year");
    // let mlength = form.getElementById("mlength");
    // let director = form.getElementById("director");
    // let watched = form.getElementById("watched");

    let title = form.elements[0].value;
    let year = form.elements[1].value;
    let mlength = form.elements[2].value;
    let director = form.elements[3].value;
    let watched = form.elements[4].value;

    newMovie = new Movie (title,year,mlength,director,watched);
    movies.push(newMovie);
    console.log(movies);
}



addMovie(new Movie("vienna",2002,"2h 32m",'yes',false));
addMovie(new Movie("vienna",2012,"2h 32m",'yes',true));


