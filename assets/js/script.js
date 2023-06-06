var animalAPI = "https://api.api-ninjas.com/v1/animals?name=ANIMAL_HERE";
var keyAnimals = "epzENF8Vuzg2XiYxDER5/g==LHqnoNfdprsV6lsX";
var plantsAPI = "https://perenual.com/api/species-list?page=1&key=";
var keyPlants = "sk-kDQd647e4a0a7cc661162";
var animalName = 'frog';

var animalName = "frog";

animalAPI = "https://api.api-ninjas.com/v1/animals?name=" + animalName;
plantsAPI = "https://perenual.com/api/species-list?key=" + keyPlants;


//gives a random number between 0 and num, not including num
function randNum(num){
    return Math.floor(Math.random() * num);;
}


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


var submitBtn = document.getElementById('submit-btn');

//generates the sandwich string to be placed onto the page
function generateSandwich(){
    var tempArr1 = ['horse', 'frog', 'panda', 'elephant', 'capybara'];
    var tempArr2 = ['eucalyptus', 'basil', 'evergreen', 'crab grass', 'leeks'];
    var var1;
    var var2;
    
    //need to pull 1 random animal and 1 random plant from each database
    //this code will replicate that process but will likely be placed elsewhere
    var1 = tempArr1[randNum(tempArr1.length)];
    var2 = tempArr2[randNum(tempArr2.length)];

    var returnString = "Bon appettit! Here's is your " + var1 + " and " + var2 + " sandwich! " + "\nWhat a delectable dish!";
    console.log(returnString);
    return returnString;
}

submitBtn.addEventListener('click', generateSandwich);
