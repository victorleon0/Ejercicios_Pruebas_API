const getJokeFromApi = () => {
    return fetch('https://api.chucknorris.io/jokes/random') // GET
        .then(response => {
            return response.json();
        })
        .then(joke => {
            return joke;
        })
        .catch((error) => {
            console.log('Error en petición broma Random', error)
        });
}

const drawJoke = (joke) => {
    document.querySelector('.chuck-joke').innerText = joke.value;
}

const changeJoke = async () => {
    const joke = await getJokeFromApi();
    drawJoke(joke);
}

const addEvents = () => {
    const buttonChange = document.querySelector('#change-joke');
    buttonChange.addEventListener('click', changeJoke);
}

const initApp = async () => {
    addEvents();

    const joke = await getJokeFromApi();
    drawJoke(joke);
};

initApp();
