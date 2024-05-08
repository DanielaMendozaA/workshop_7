
// const options = {
//   method: 'GET',
//   url: 'https://chinese-food-db.p.rapidapi.com/5',
//   headers: {
//     'X-RapidAPI-Key': '7fe86bd6f3mshb7f8320f0f43933p18904djsnc940b4e03823',
//     'X-RapidAPI-Host': 'chinese-food-db.p.rapidapi.com'
//   }
// };

// async function fetchData() {
//   try {
//     const response = await fetch(options.url, {
//         headers:{
//          'X-RapidAPI-Key': '7fe86bd6f3mshb7f8320f0f43933p18904djsnc940b4e03823',
//          'X-RapidAPI-Host': 'chinese-food-db.p.rapidapi.com'
//         }
//     })
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchData();




const options = {
  method: 'GET',
  url: 'https://beers-list.p.rapidapi.com/beers/italy',
  headers: {
    'X-RapidAPI-Key': '7fe86bd6f3mshb7f8320f0f43933p18904djsnc940b4e03823',
    'X-RapidAPI-Host': 'beers-list.p.rapidapi.com'
  }
};


async function cargarDatos() {
  try {
    const response = await fetch(options.url, {
      headers: {
        'X-RapidAPI-Key': '7fe86bd6f3mshb7f8320f0f43933p18904djsnc940b4e03823',
        'X-RapidAPI-Host': 'beers-list.p.rapidapi.com'
      }
    })
    const data = await response.json();
    console.table(data);
  } catch (error) {
    console.error(error);
  }

}

cargarDatos()

