let library = []

function addMovie(){
    library.push(Movie)
}


function Movie(title,year,time,director,watched){
    this.title = title;
    this.year = year;
    this.time = time;
    this.director = director;
    this.watched = watched;
}

let mv = prompt();
addMovie(mv);
for(i=0;i<3;i++)
{console.log(library[0])}