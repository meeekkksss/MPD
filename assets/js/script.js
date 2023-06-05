
var animalAPI = "https://api.api-ninjas.com/v1/animals?name=ANIMAL_HERE";
var keyAnimals = "epzENF8Vuzg2XiYxDER5/g==LHqnoNfdprsV6lsX";
var plantsAPI = "";
var keyPlants = "";
var animalName = "frog";
animalAPI = "https://api.api-ninjas.com/v1/animals?name=" + animalName;
plantsAPI = "" + keyPlants;

//feel free to remove/rename this function. this one is only for testing purposes
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
