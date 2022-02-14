let numberOfFilms = prompt('сколько фильмов Вы уже посмотрели');
console.log(`${numberOfFilms}`);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const moviesFirstQuestion = prompt('последний просмотренний фильм?'),
    countFirstQuestion = prompt(`насколько оцените ${moviesFirstQuestion} ?`),
    moviesSecondQuestion = prompt('последний просмотренний фильм?'),
    countSecondQuestion = prompt(`насколько оцените ${moviesSecondQuestion} ?`);

personalMovieDB.movies[moviesFirstQuestion] = countFirstQuestion;
personalMovieDB.movies[moviesSecondQuestion] = countSecondQuestion;

console.log(personalMovieDB);
