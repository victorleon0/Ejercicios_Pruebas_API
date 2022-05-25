const apiTraductor = () => {
    return fetch ("")
        .then((res) => res.json())
        .then((res) => console.log (resJson));


};




const initTraductor = () => {
    const data = await apiTraductor ();
    console.log (data)

}

initTraductor ()