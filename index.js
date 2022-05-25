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

const getTranslate = () => {
    
    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/detect') // GET
        .then(translate => {
            return translate.json();
        })
        .then(translate => {
            return translate;
        })
        .catch((error) => {
            console.log('Error en petición broma Random', error)
        });
}

const textTranslate = async (translate) => {
    document.querySelector('.translate-joke').innerText = joke.translate;
}

const drawJoke = (joke) => {
    document.querySelector('.chuck-joke').innerText = joke.value;
}

const changeJoke = async () => {
    const joke = await getJokeFromApi();
    drawJoke(joke);
    textTranslate (translate)
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
