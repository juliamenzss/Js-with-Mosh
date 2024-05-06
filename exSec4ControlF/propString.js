const movie = {
    title: 'O Clone',
    releaseYear: 2018,
    rating: 4.5,
    director: 'João Carneiro'
}

function showProperties(obj) {
    for (let key in obj){
        if(typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}
showProperties(movie)