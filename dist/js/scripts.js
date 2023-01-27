const numberOfFilms = +prompt('Сколько фильмов ты уже посмотрел?', '');
const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
      };
const answerFirst = prompt('Один из последний посмотренных фильмов?', ''),
      answerSecond = prompt('На сколько оцените его?', ''),
      answerThird = prompt('Один из последний посмотренных фильмов?', ''),
      answerFortd = prompt('На сколько оцените его?', '');

personalMovieDB.movies[answerFirst] = answerSecond;
personalMovieDB.movies[answerThird] = answerFortd;
console.log(personalMovieDB);