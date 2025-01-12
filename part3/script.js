function getClassificationLabel(film) {
    if (film.date >= 2024) {
        return "~ NEW FILM: ";
    } // return new film if date is 2024 or after 2024
    if (film.date < 2000) {
        return "~ CLASSIC FILM: ";
    } // else if return classic film if before 2000
    return ""; // else return blank
}

// List/array of movies to add to data
let additionalFilms = [
    {
        title: "The Lord of the Rings",
        date: 2001,
        synopsis:
            "A hobbit goes to an adventure with the help of 3 other races to destroy a ring and save Middle-Earth.",
    },
    {
        title: "Back to the Future",
        date: 1985,
        synopsis:
            "A teenager travels through time in a time machine car to fix the past and the future.",
    },
];

// Loop through the array to push to data rray
for (let i = 0; i < additionalFilms.length; i++) {
    data.push(additionalFilms[i]);
}

for (let i = 0; i < data.length; i++) {
    console.log(
        "### " +
            getClassificationLabel(data[i]) +
            data[i].title +
            ", " +
            data[i].date +
            " ###"
    );
    console.log(data[i].synopsis);
}
