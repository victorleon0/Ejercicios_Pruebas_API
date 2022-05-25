const getGibliMovies = () => {
    return fetch('https://ghibliapi.herokuapp.com/films') // GET
        .then(response => {
            return response.json();
        })
        .then(movies => {
            return movies;
        })
        .catch((error) => {
            console.log("Ha habido un error al obtener la película", error)
        });
}

const mapMovies = (movies) => { //creamos una funcion para los datos de las peliculas
    const mapMovies = movies.map ((movie) => ({   //Mapeamos para encontrar los datos de las peliculas
        id: movie.id,
        title: movie.title,
        japanese_title: movie.original_title,
        image: movie.image, 
        banner: movie.movie_banner,
        description: movie.description, 
        year: movie.release_date
    
}));
return mapMovies;
}

const drawMovies = (movies) => {  // Funcion para pintar la película
    let gallery = document.querySelector(".movies-gallery");  // Creamos la galería
    for (const movie of movies) {   //Bucle for para buscar todas las pelis
        let movieDiv = document.createElement("div");  // creamos un div para cada peli
        movie.className = "movie-card"; //le ponemos la clase
        


        let movieTitle = document.createElement("h2")  // Creamos el titulo dentro de la galeria de peliculas
        movieTitle.textContent = '${movie.title} -- ${movie.original_title}'  // Ponemos los titulos

        
        let movieImagen = document.createElement("img");
        movieImagen.setAttribute("src",movie.image);
        movieImagen.setAttribute("alt", '${movie.banner}');

        let movieDescription = document.createElement("p");
        movieDescription.innerText = movie.description;

        let movieYear = document.createElement("p");
        movieYear.innerHTML = 'Year: <b> ${movie.year}</b>';


        movieDiv.appendChild(movieTitle);
        movieDiv.appendChild(movieDescription);
        movieDiv.appendChild(movieImagen);
        movieDiv.appendChild(movieYear);
        gallery.appendChild(movieDiv);
    }
    return drawMovies;
}


const initApp = async () => {
    const data = await getGibliMovies ();
    console.log (data)
}

initApp();