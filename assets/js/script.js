var animalAPI = "https://api.gbif.org/v1/species/"; //the end should add an integer for a random animal. it will output
var keyAnimals = "epzENF8Vuzg2XiYxDER5/g==LHqnoNfdprsV6lsX";
var plantsAPI = "https://perenual.com/api/species-list?page=1&key=";
var keyPlants = "sk-kDQd647e4a0a7cc661162";
var plantsPageRange = 377; //last page of the plants API that we are using
var animalsRange = 8000;

var myPlant = '';
var myAnimal = 'pig';

plantsAPI = "https://perenual.com/api/species-list?page=1&key=" + keyPlants;

//gives a random number between 0 and num, not including num
function randNum(num){
    return Math.floor(Math.random() * num);
}

function getAnimal(num){
    fetch(animalAPI + num)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            console.log("Searching...");
            //checks that the data contents is an animal
            // if((data.class != 'Aves') || (data.class != 'Mammalia') || (data.class != 'Vertebrata')){ 
            //     getAnimal(randNum(animalsRange));
            // } else { 
            //     console.log(data);
            //     console.log(data.scientificName); 
            // }
        });
}

//gets a plant from an api
function getPlant(num){
    var plantPage = plantsAPI.replace("page=1", "page=" + num)
    console.log("My Page: " + plantPage);
    fetch(plantPage)
    .then(function (response){
        return response.json();
    })
  
    .then(function (data) {
      console.log(data);
    })
    .then(function (data){
        console.log(data);
        
    });
}

function generateIngredients(){
    // getPlant(randNum(plantsPageRange));
    getAnimal(randNum(animalsRange));
}

generateIngredients();  

//pre generate the next sandwich
function init(){

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

/* ===== CODE GRAVEYARD =====
//gets an animal from an api
// function getAnimal(num){
//     // var animalPage = animalAPI.replace("name=", "name=" + myAnimal);
//     fetch(animalAPI, {
//         method: 'GET',
//         url: animalAPI,
//         headers: { 'X-Api-Key': keyAnimals},
//         contentType: 'application/json',
//         })
//         .then(function (response){
//             return response.json();
//         })
//         .then(function (data){
//             console.log(data);
//         });
// }
*/