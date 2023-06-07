
// Animal+ Plants API

>>>>>>> main
var animalAPI = "https://api.gbif.org/v1/species/"; //the end should add an integer for a random animal. it will output
var keyAnimals = "epzENF8Vuzg2XiYxDER5/g==LHqnoNfdprsV6lsX";
var plantsAPI = "https://perenual.com/api/species-list?page=1&key=";
var keyPlants = "sk-kDQd647e4a0a7cc661162";
var animalName = 'frog';
var plantsPageRange = 377; //last page of the plants API that we are using

var outputBox = document.getElementById('output-box');
 
var myPlant = '';
var myAnimal = '';



animalAPI = "https://api.api-ninjas.com/v1/animals?name=" + animalName;
plantsAPI = "https://perenual.com/api/species-list?page=1&key=" + keyPlants;

var myPlant = '';
var myAnimal = 'pig';

function testFunction(){
    fetch("https://api.gbif.org/v1/occurrence/search?kingdom=animalia?class=mammalia/")
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            console.log(data);
        });
}
// testFunction();


//gives a random number between 0 and num, not including num
function randNum(num){
    return Math.floor(Math.random() * num);
}


//gets an animal from an api
function getAnimal(num){
    fetch(animalAPI, {
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/animals?name=cheetah',
        headers: { 'X-Api-Key': keyAnimals},
        contentType: 'application/json',
        })
        .then(function (response){
            console.log("Testing...");
            console.log(response);
            // v check if page exists v
            if(response.status == 404){  
                return undefined;
            } else { return response.json(); }
        })
        .then(function (data){

            console.log("Searching...");

            // console.log("Searching...");

            //checks that the data contents is an animal
            // if((data.class != 'Aves') || (data.class != 'Mammalia') || (data.class != 'Vertebrata')){ 
            //     getAnimal(randNum(animalsRange));
            // } else { 
            //     console.log(data);
            //     console.log(data.scientificName); 
            // }

            console.log(data);

            // console.log(data);
            if(data === undefined){ 
                getAnimal(randNum(animalsRange)); 
            } else {
                myAnimal = data.scientificName;
                console.log('Animal: ' + myAnimal);
            }

        });
}

//gets a plant from an api
<<<<<<< HEAD

function getPlant(num1, num2){
    var plantPage = plantsAPI.replace("page=1", "page=" + num1)
>>>>>>> main
    console.log("My Page: " + plantPage);
    fetch(plantPage)
=======
function getPlant(num){
    var plantsPage = plantsAPI.replace("page=1", "page=" + num)
    console.log("My Page: " + plantsPage);
    fetch(plantsPage)
>>>>>>> f7c6e57 (program is now capable of choosing a random page on each load for selecting a plant)
    .then(function (response){
        return response.json();
    })
  
    .then(function (data) {
<<<<<<< HEAD

      console.log(data);
    })
    
}

function generateIngredients(){
    // getPlant(randNum(plantsPageRange));
    getAnimal(randNum(animalsRange));
}

generateIngredients();  

//pre generate the next sandwich
function init(){

}

    //   console.log(data);
    //   console.log("Our Plant:");
    //   console.log(num2);
    //   console.log(data.data[num2]);
    if(data.data[num2] == undefined){ 
        getPlant(randNum(plantsPageRange), num2); 
    } else { 
        myPlant = data.data[num2].common_name;
        console.log('Plant: ' + myPlant);
    }
    
=======
      console.log(data);
    })
    .then(function (data){
        console.log(data);
        
        
>>>>>>> f7c6e57 (program is now capable of choosing a random page on each load for selecting a plant)
    });
}

//this function will run when the page is opened
//this function will also run after the click event is resolved
//this function pre-generates the sandwich before the user click
function generateIngredients(){
    getPlant(randNum(plantsPageRange));
}


//pre generate the next sandwich
function init(){
    generateIngredients();  
}

init();


var submitBtn = document.getElementById('submit-btn');

//generates the sandwich string to be placed onto the page
function generateSandwich(){   
    //need to pull 1 random animal and 1 random plant from each database
    //this code will replicate that process but will likely be placed elsewhere
    var sandwichMsg = "Bon appettit! We call this one " + myAnimal + " con " + myPlant + " sandwich! " + "\nEnjoy your scrumptuous sandwich!";
    outputBox.textContent = sandwichMsg;
    init();
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
// function to generate images 
   