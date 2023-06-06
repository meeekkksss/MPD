var animalAPI = "https://api.api-ninjas.com/v1/animals?name=ANIMAL_HERE";
var keyAnimals = "epzENF8Vuzg2XiYxDER5/g==LHqnoNfdprsV6lsX";
var plantsAPI = "https://perenual.com/api/species-list?page=1&key=";
var keyPlants = "sk-kDQd647e4a0a7cc661162";
var animalName = 'frog';

var animalName = "frog";

animalAPI = "https://api.api-ninjas.com/v1/animals?name=" + animalName;
plantsAPI = "https://perenual.com/api/species-list?key=" + keyPlants;

//gets an animal from an api
function getAnimal(){
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

//gets a plant from an api
function getPlant(){
    fetch(plantsAPI)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
    });
}

