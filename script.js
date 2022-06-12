var movieCount = 0;

let add = document.getElementById("add");
add.onclick = function(){toggleAddModal();}


function toggleAddModal(){
    modal  = document.getElementById("form");
    if(modal.classList.contains("invis"))
    modal.classList.remove("invis");
    else modal.classList.add("invis");
}


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


function addMovie(event){
    
    event.preventDefault();
    let title = form.elements[0].value;
    let year = form.elements[1].value;
    let mlength = form.elements[2].value;
    let director = form.elements[3].value;
    if(form.elements[4].checked==true)
    {watched = true;}
    else watched = false;


    newMovie = new Movie (title,year,mlength,director,watched);
    movies.push(newMovie);
    printLib();
    toggleAddModal();
    movieCount++;
    addMoviesToLib();
}


function printLib(){
    
    for(i=0;i<movies.length;i++)
    console.log(movies[i]);
}

function addMoviesToLib(){
    let i = movieCount;
    for(;i<movies.length;i++)
    {
        let cardContainer = document.getElementById("card-container");
        let div1 = document.createElement("div");
        div1.classList.add("card");
        div1.classList.add("also");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        let div4 = document.createElement("div");
        let div5 = document.createElement("div");
        let div6 = document.createElement("div");
        div2.innerHTML = movies[i].title;
        div3.innerHTML = movies[i].year;
        div4.innerHTML = movies[i].mlength;
        div5.innerHTML = movies[i].director;
        div6.innerHTML = movies[i].watched;
        div1.appendChild(div2);
        div1.appendChild(div3);
        div1.appendChild(div4);
        div1.appendChild(div5);
        div1.appendChild(div6);
        cardContainer.appendChild(div1);
    }
}

