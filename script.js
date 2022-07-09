window.onload = function(){
    let btn = document.createElement("button");
    btn.innerText = "Search";
    btn.type = "submit";
    btn.name = "formBtn";
    document.getElementById("button").appendChild(btn);
    btn.addEventListener("click", function() {
        displayFilm
        console.log('success')
    })
fetch("https://ghibliapi.herokuapp.com/films/")
    .then((response) => {
        if (response.ok){
            return response.json();
        }
    })
    .then(data => {
        console.log(data);
        displayFilm([1]);
    })

    function displayFilm(data) {
    let film = data.id[0];
    let filmDiv = document.getElementById("film");
    let filmName = film.title;
    let heading = document.createElement("h1");
    heading.innerText = filmName;
    filmDiv.appendChild(heading);
    
}}