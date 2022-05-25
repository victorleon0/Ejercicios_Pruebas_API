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


const initApp = async () => {
    const data = await getGibliMovies ();
    console.log (data)
}

initApp();