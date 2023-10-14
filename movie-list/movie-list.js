async function getMovies() {
  let movieSection = document.getElementById('movie-section')
  movieSection.innerHTML =``
  try {
  let input = document.getElementById("search").value;
  let apiURL = `http://www.omdbapi.com/?s=${input}&apikey=e0d541ca`
  let data = await fetch(apiURL)
  data = await data.json()
  console.log(data);
    data.Search.map(({Poster,Title,Year})=>{
      movieSection.innerHTML +=`
      <div>
        <img src=${Poster} alt="">
        <h2>${Title}</h2>
        <p>${Year}</p>
      <div>`
      })
  }

  catch(error) {
    movieSection.innerHTML = "<h1>Movies not Found</h1>"
      movieSection.style.cssText=`color:red;font-size:50px;`
    console.log(error);
  }
}