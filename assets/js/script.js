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
