/**
 * Vamos a meternos con las madres de otro (Broma)
 * 
 * https://yomomma-api.herokuapp.com/jokes
 * 
 *  {
        "joke": "Yo momma is so ugly that when she was born, the doctor slapped her AND her parents!"
    }
 * 
 * OJO: Esta api solo permite 5 peticiones por minuto.
 * Si alcanzáis el límite de peticiones recibiréis:
 * 
 * {
 *      "error": "Rate limit exceeded: 5 per 1 minute"
 * }
 * 
 * Bien, tienes que consumir esta URL. Te va a devolver un objeto
 * con una broma.
 * 
 * Iteración 1: Tendrás que pintarla en el DOM de la forma que mas te guste. (1 punto)
 * 
 * Iteración 2: Añadir un botón para cambiar de broma. (1 punto)
 * 
 * BONUS EXTRA: 10 puntos extra al que implemente traducción mediante API de traducción.
 * (os tendréis que registrar en alguna gratuita e implementar la respuesta)
 * (no pongáis vuestra tarjeta de crédito o débito para ninguna prueba gratuita)
 */


    const getJokesFromApiPromise = () => {
        return fetch('https://api.jokes.one/joke/random') // GET
            .then(response => {
                return response.json();
            })
            .then(jokes => {
                return jokes.textContent;
            })
            .catch((error) => {
                console.log("More Jokes in 5 minutes", error)
            });
    }


    const createContainer = () => {
        const container = document.createElement('div');
        container.classList.add('container');
        document.body.appendChild(container);
    
        return container;
    };
    

    const createBox = (container) => {
        const title = document.createElement('div');
    
        const h1 = document.createElement('h1');
        h1.innerText = '¡HOLA!';
        title.appendChild(h1);

        const h2 = document.createElement('h2');
        h2.innerText = "¿Sabías qué?";
        title.appendChild(h2);

        const h3 = document.createElement('h3');
        h3.classList.add('jokeText');
        h3.innerText = "Joke!";
        title.appendChild(h3);

        container.appendChild(title);

        return jokesText;
    }

    const createButton = (container) => {
        const myButton = document.createElement('button');
        mybutton.classList.add('changeButton');
        container.appendChild("button");

        return myButton;
    }

    const theJoke = (jokes) => {
        document.querySelector('.jokeText').innerText = jokes.textContent;
        return textContent;
    }
    
    const initApp = async () => {
        addEvents();
    
        const jokes = await getJokesFromApi();
        theJoke(textContent);
    };
    
    const init = () => {
        const container = createContainer();
        createBox(container);
        createButton(container);
    }
    
    window.onload = init ();
    initApp();
    