window.onload = function(){
    let btn = document.createElement("button");
    
fetch("https://ghibliapi.herokuapp.com/films")
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
    .then(data => {
        console.log(data);
        displayFilm(data);
    })

    function displayFilm(data) {
        for (let i=0; i<data.length;i++){
            data[i]
    const film = data[i];
    let filmDiv = document.getElementById("film");
    let filmName = film.title;
    let heading = document.createElement("h1");
    heading.innerText = filmName;
    fData.appendChild(heading);
    const filmImg = document.createElement("img");
    filmImg.src = film.image;
    fData.appendChild(filmImg);
    const filmReleaseDate = film.release_date;
    let paragraph = document.createElement("p");
    paragraph.innerText = filmReleaseDate
    fData.appendChild(paragraph);
    let filmProducer = film.producer;
    let heading3 = document.createElement("h3");
    heading3.innerText = filmProducer;
    fData.appendChild(heading3);
    heading3.setAttribute("class", filmProducer);
    paragraph.setAttribute("class", filmProducer);
    heading.setAttribute("class", filmProducer);
        }}   
}
