const getCharacterFromApi = () => {
    return fetch('https://bobsburgers-api.herokuapp.com/characters/')
    .then ((response) => response.json())
    .then ((res) => res)
    .catch((error) => console.log('No se ha podido recuperar personaje', error))
    
}


const drawCards = (list) =>{
    for(character of list){
        const div = document.createElement('div');
        const img = document.createElement('img');
        const p = document.createElement('p');
        img.setAttribute('src',character.image);
        p.innerText = character.name;
        div.appendChild(p);
        div.appendChild(img);
        document.body.appendChild(div);
    }
}


const init = async() => {
    const characters = await getCharacterFromApi();
    drawCards(characters);   
}

init();
