window.onload = function() {
    
fetch("https://ghibliapi.herokuapp.com/films")
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
    .then(data => {
        displayFilm(data);
        
    })

    const films = [];

function displayFilm(data) {
        for (let i=0; i<data.length;i++){
            data[i]
    const film = data[i];
    films.push(film);
    let filmProducer = film.producer;
    let filmDiv = document.getElementById("film");
    let filmName = film.title;
    let heading = document.createElement("h1");
    const filmImg = document.createElement("img");
    let paragraph = document.createElement("p");
    const filmReleaseDate = film.release_date;
    let heading3 = document.createElement("h3");
    heading.innerText = filmName;
    fData.appendChild(heading);
    filmImg.src = film.image;
    fData.appendChild(filmImg);
    paragraph.innerText = filmReleaseDate
    fData.appendChild(paragraph);
    heading3.innerText = filmProducer;
    fData.appendChild(heading3);
    heading3.setAttribute("class", filmProducer);
    paragraph.setAttribute("class", filmProducer);
    heading.setAttribute("class", filmProducer);
    filmImg.setAttribute("class", filmProducer);
        }}  
        
    document.querySelector(".buttonlayout").addEventListener("click", function(event) {
        if(event.target.innerText === "Show All") {
            filterObjects("all");
        }else if(event.target.innerText === "Isao Takahata") {
            filterObjects("IsaoTakahata");
            console.log("this is working")
        }else if(event.target.innerText === "Toru Hara") {
            filterObjects("ToruHara");
        }else if(event.target.innerText === "Hayao Miyazaki") {
            filterObjects("HayaoMiyazaki");
        }else if(event.target.innerText === "Toshio Suzuki") {
            filterObjects("ToshioSuzuki");
        }else if(event.target.innerText === "Yoshiaki Nishimura") {
            filterObjects("YoshiakiNishimura");
        }
    })

        function filterObjects(){
            console.log("okay so just like imagine all the films that aren't by the producer you want aren't there")
           
        }
}