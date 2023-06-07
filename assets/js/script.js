var animalAPI = "https://api.gbif.org/v1/species/"; //the end should add an integer for a random animal. it will output
var keyAnimals = "epzENF8Vuzg2XiYxDER5/g==LHqnoNfdprsV6lsX";
var plantsAPI = "https://perenual.com/api/species-list?page=1&key=";
var keyPlants = "sk-kDQd647e4a0a7cc661162";
var plantsPageRange = 377; //last page of the plants API that we are using
var plantsEntryRange = 30;
var animalsRange = 8000;

var outputBox = document.getElementById('output-box');

var myPlant = '';
var myAnimal = 'pig';

plantsAPI = "https://perenual.com/api/species-list?page=1&key=" + keyPlants;


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

function getAnimal(num){
    fetch(animalAPI + num)
        .then(function (response){
            console.log("Testing...");
            console.log(response);
            // v check if page exists v
            if(response.status == 404){ 
                getAnimal(randNum(animalsRange)); 
            } else { return response.json(); }
        })
        .then(function (data){
            // console.log("Searching...");
            //checks that the data contents is an animal
            // if((data.class != 'Aves') || (data.class != 'Mammalia') || (data.class != 'Vertebrata')){ 
            //     getAnimal(randNum(animalsRange));
            // } else { 
            //     console.log(data);
            //     console.log(data.scientificName); 
            // }
            // console.log(data);
            myAnimal = data.scientificName;
            console.log('Animal: ' + myAnimal);
        });
}

//gets a plant from an api
function getPlant(num1, num2){
    var plantPage = plantsAPI.replace("page=1", "page=" + num1)
    console.log("My Page: " + plantPage);
    fetch(plantPage)
    .then(function (response){
        return response.json();
    })
  
    .then(function (data) {
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
    
    });
}

//this function will run when the page is opened
//this function will also run after the click event is resolved
//this function pre-generates the sandwich before the user click
function generateIngredients(){
    getPlant(randNum(plantsPageRange), randNum(plantsEntryRange));
    // setTimeout(getAnimal(208), 3000);
    // getAnimal(208);
    getAnimal(randNum(animalsRange));
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
