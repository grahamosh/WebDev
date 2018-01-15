var moviesObj = [
                    { title: "Indiana Jones", rating: 5, hasWatched: true },
                    { title: "Superman", rating: 5, hasWatched: true },
                    { title: "Forrest Gump", rating: 1, hasWatched: false },
                    { title: "Alien", rating: 2, hasWatched: true }
                ]

function buildString (movie) {
    var result = "You have ";
    if (movie.hasWatched === true) {
        result += "watched ";
    }
    else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}

moviesObj.forEach(function(movie) {
    console.log(buildString(movie));
})
