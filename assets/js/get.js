// //Запросы от сервера

// async function getData(url = '') {
//   const response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-type': 'application/json'
//     }
//   }); 

//   if(!response.ok) throw Error(response.status);

//   return response.json();
// };





// //https://jsonplaceholder.typicode.com/posts

// //https://jsonplaceholder.typicode.com/posts/1

// getData('https://jsonplaceholder.typicode.com/posts')
// .then((data) => console.log(data))
// .catch((err) => console.log(err));