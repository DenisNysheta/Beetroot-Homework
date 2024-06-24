const API_KEY = "4775e6f0"
const API = `http://www.omdbapi.com/?apikey=${API_KEY}&`
// const APIID = `http://img.omdbapi.com/?apikey=${API_KEY}&`

let btn = document.querySelector(".btn")
let list = document.querySelector(".movies__list")
let pagination = document.querySelector(".pagination")
let detailsBox = document.querySelector(".details")
let totalResults;
let id;

btn.addEventListener("click", () => {

    let inputTitle = document.getElementById("search-title")
    let inputYear = document.getElementById("search-year")
    let inputType = document.getElementById("search-type")
    
    const APIFIND = `${API}s=${inputTitle.value}&y=${inputYear.value}&type=${inputType.value}`

    fetch(APIFIND)
        .then(responce => responce.json())
        .then((movies) => {

            list.innerHTML = " "
            pagination.innerHTML = " "

            if(movies.Error == "Movie not found!") {
                list.innerHTML = `
                    <p class="not-found">${movies.Error}</p>
                `
                return
            }

            totalResults = movies.totalResults
            let listMovies = movies.Search
            console.log(movies)
            displayPagination(totalResults)

            displayData(listMovies,list)

            //
            list.addEventListener("click", (e) => {
                let btnDetails = e.target.classList.value == "movie__details"
                if(btnDetails) {
                    let id = e.target.dataset.imdb
                    
                    fetch(`${API}i=${id}`)
                        .then(response => response.json())
                        .then(detailsList => {
                            console.log(detailsList)
                            displayDetails(detailsList,detailsBox)
                        })
                }
            })

            pagination.addEventListener("click", (e) => {
                let pagBtn = e.target.classList.value == "pagination__btn"
                if(pagBtn) {
                    let btnPag = e.target.textContent
                    fetch(`${APIFIND}&page=${btnPag}`)
                        .then(responce => responce.json())
                        .then(movieList => {
                            let newList = movieList.Search
                            displayData(newList,list)
                        })
                }
            })
        })
})

function displayPagination(total) {
    let pagination = document.querySelector(".pagination")
    let pages = Math.ceil(total / 10)

    for(let i = 1; i <= pages; i++) {
        let li = document.createElement("li")
        li.classList.add("pagination__btn")
        li.textContent = i
        pagination.appendChild(li)
    }
}

function displayData(arrList, listForAppend) {
    listForAppend.innerHTML = " "
    arrList.forEach(item => {
        console.log(item)

        let box = document.createElement("div")
        box.classList.add("movie")

        box.innerHTML = `
            <img class="movie__img" src="${item.Poster}" alt="Poster: ${item.Title}">
            <h3 class="movie__title">${item.Title}</h3>
            <p class="movie__type">${item.Type == "movie" ? "Movie" : item.Type == "series" ? "Series" : item.Type == "Episode" ? "Episode" : " "}</p>
            <span class="movie__year">${item.Year}</span>
            <button data-imdb="${item.imdbID}" class="movie__details">Details</button>
        `
        listForAppend.appendChild(box)
    });
}

function displayDetails(objDetails,detailsBox) {
    detailsBox.innerHTML = ""


        detailsBox.innerHTML = `
            <div class="details__first">
                <img class="details__img" src="${objDetails.Poster}" alt="${objDetails.Title}">
                <p class="details__producer">${parseInt(objDetails.Runtime) > 100  ? `Producer: ${objDetails.Director}` : " "}</p>
                <p class="details__actors">${objDetails.Actors}</p>
                <p class="details__runtime">${objDetails.Runtime}</p>
                <p class="details__country">${objDetails.Country}</p>
            </div>
            <div class="details__second">
                <h2 class="details__title">${objDetails.Title}</h2>
                <p class="details__plot">${objDetails.Plot}</p>
                <p class="details__released">${objDetails.Released}</p>
            </div>
        `
}


//  