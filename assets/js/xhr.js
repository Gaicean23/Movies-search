// const getData = (url) => new Promise((resolve, reject) => {
//   let xhr = new XMLHttpRequest();

//   xhr.open('GET', url);

//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       let json = JSON.parse(xhr.response);

//       resolve(json.Search);
//     }else reject(xhr.statusText);
//   };

//   xhr.onerror = (err) => reject(err);

//   xhr.send();
// });

// let search = 'Iron man';

// getData(`http://www.omdbapi.com/?s=${search}&apikey=546340e7&`)
// .then((movies) => movies.forEach((movie) => console.log(movie)));


//ДРУГОЙ СИНТАКСИС 

const getData = (url) => fetch(url)
  .then((response) => response.json())
  .then((json) => {
    if (json.Search) return json.Search;
    throw Error('Сервер вернул неправильный объект');
  });


// let ironman = getData(`http://www.omdbapi.com/?s=Iron%20man&apikey=546340e7&`);




// Promise.all([ironman, batman, superman]).then((result) => result.forEach((movies) =>
//  movies.forEach((movie) => addMovieToList(movie))));

//delay задержка от спама
inputSearch.addEventListener('keyup', (e) => {
  delay(() => {

    const searchString = e.target.value;
    if (searchString && searchString.length > 4) if (!triggerMode) clearMoviesMarkup();

    getData(`http://www.omdbapi.com/?s=${searchString}&apikey=546340e7&`)
    .then((movies) => movies.forEach((movie) => addMovieToList(movie)))
    .catch(err => console.log(err));
  }, 1000);

});