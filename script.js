window.onload = async function() {
    
    let films = [];   

    await fetch("https://ghibliapi.herokuapp.com/films")
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
    .then(data => {
        films = data;
        displayFilm(data);
    })

function displayFilm(data) {
    document.querySelector("#fData").innerHTML = ""; 
        for (let i=0; i<data.length;i++){
            data[i]
    const film = data[i];
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
            filterObjects("Isao Takahata");
     }else if(event.target.innerText === "Toru Hara") {
            filterObjects("Toru Hara");
      }else if(event.target.innerText === "Hayao Miyazaki") {
            filterObjects("Hayao Miyazaki");
     }else if(event.target.innerText === "Toshio Suzuki") {
            filterObjects("Toshio Suzuki");
      }else if(event.target.innerText === "Yoshiaki Nishimura") {
            filterObjects("Yoshiaki Nishimura");
     }
 })

function filterObjects(producer){
            if(producer === "all"){
            return displayFilm(films)}
            else {
                const filterFilms = films.filter((film) => film.producer === producer);
                return displayFilm(filterFilms);}
           
        }
        
 function searchByMovieTitle(title){
    const foundMovies = films.filter(film => film.title.toLowerCase().includes(title.toLowerCase()))
    return displayFilm(foundMovies);
            
    } 
    document.querySelector(".searchbtn").addEventListener("click", function(){
            const searchBy = document.getElementById("search").value
            searchByMovieTitle(searchBy);
         })        
}