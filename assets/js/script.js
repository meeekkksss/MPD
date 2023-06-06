// function getData() {
//   fetch("https://api.jikan.moe/v3/anime/1")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       // Process the data returned from the API
//       console.log(data);
//       //displays data on page
//       var title = data.title;
//       var synopsis = data.synopsis;
//       var imageUrl = data.image_url;

//       // Displays the fetched data on the web page
//       var titleElement = document.getElementById("title");
//       var synopsisElement = document.getElementById("synopsis");
//       var imageElement = document.getElementById("image");

//       titleElement.textContent = title;
//       synopsisElement.textContent = synopsis;
//       imageElement.src = imageUrl;
//     })
//     .catch(function (error) {
//       console.error("Error:", error);
//     });
// }

var animalAPI = "https://api.api-ninjas.com/v1/animals?name=ANIMAL_HERE";
var keyAnimals = "epzENF8Vuzg2XiYxDER5/g==LHqnoNfdprsV6lsX";
var plantsAPI = "";
var keyPlants = "";

var animalName = 'frog';

var animalName = "frog";

animalAPI = "https://api.api-ninjas.com/v1/animals?name=" + animalName;
plantsAPI = "" + keyPlants;

//feel free to remove/rename this function. this one is only for testing purposes

function tempFunc(){
    fetch(animalAPI, {
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/animals?name=cheetah',
        headers: { 'X-Api-Key': keyAnimals},
        contentType: 'application/json',
        })
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            console.log(data);
        });
}

tempFunc();



function tempFunc() {
  fetch(animalAPI, {
    method: "GET",
    url: "https://api.api-ninjas.com/v1/animals?name=cheetah",
    headers: { "X-Api-Key": keyAnimals },
    contentType: "application/json",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

tempFunc();


// // temp function 
// const axios = require("axios");

// const options = {
//   method: "GET",
//   url: "https://plants2.p.rapidapi.com/api/plants",
//   params: {
//     id: "63ef4eb7476230641c4c0d62",
//   },
//   headers: {
//     Authorization:
//       "GKZOHNZj0xP65kk0BAE2Tl9LGagm0pfD3DFNxAEEZcMQBhRZVDco8vbNJdnwwCo0",
//     "X-RapidAPI-Key": "98093986c1mshbfa8f9e3eccd4c9p12077ejsncf3d0f12ce42",
//     "X-RapidAPI-Host": "plants2.p.rapidapi.com",
//   },
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }


