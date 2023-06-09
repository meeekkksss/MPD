var animalAPI =
  "https://api.gbif.org/v1/species/search?rank=SPECIES&highertaxon_key=359&limit=100&offset=0"; //the end offsets the data
var keyAnimals = "epzENF8Vuzg2XiYxDER5/g==LHqnoNfdprsV6lsX";
var plantsAPI = "https://perenual.com/api/species-list?page=1&key=";
var keyPlants = "sk-kDQd647e4a0a7cc661162";
var plantsPageRange = 377; //last page of the plants API that we are using
var gbifAPILimit = 100;
var plantsEntryRange = 30;
var animalsOffset = 5000;
var plantsOffset = 5000;
var dataRange = 100;
var taxonMammals = 359;
var taxonPlants = 6;
var animalAPI =
  "https://api.gbif.org/v1/species/search?rank=SPECIES&highertaxon_key=359&limit=100&offset=0";

var outputBox = document.getElementById("output-box");

var myPlant = "";
var myAnimal = "";
// animal audio
let myAudio = document.querySelector("#audio");
myAudio.play();

plantsAPI = "https://perenual.com/api/species-list?page=1&key=" + keyPlants;

// gets a random animal for the user
function getAnimal(taxon, randOffset, randIndex) {
  fetch(
    `https://api.gbif.org/v1/species/search?rank=SPECIES&highertaxon_key=${taxon}&limit=100&offset=${randOffset}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      myAnimal = data.results[randIndex].scientificName;
      console.log(`My animal is: ${myAnimal}`);
    });
}

// gets a random plant for the user
function getPlant(taxon, randOffset, randIndex) {
  fetch(
    `https://api.gbif.org/v1/species/search?rank=SPECIES&highertaxon_key=${taxon}&limit=100&offset=${randOffset}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      myPlant = data.results[randIndex].scientificName;
      console.log(`My plant is: ${myPlant}`);
    });
}

//gives a random number between 0 and num, not including num
function randNum(num) {
  return Math.floor(Math.random() * num);
}

//this function will run when the page is opened
//this function will also run after the click event is resolved
//this function pre-generates the sandwich before the user click
function generateIngredients() {
  // setTimeout(getAnimal(208), 3000); | this is testing out the timeout function
  // getAnimal(208); | this is a dead link
  getAnimal(taxonMammals, randNum(animalsOffset), randNum(dataRange));
  getPlant(taxonPlants, randNum(plantsOffset), randNum(dataRange));
}

//pre generate the next sandwich
function init() {
  generateIngredients();
}

init();

var submitBtn = document.getElementById("submit-btn");
var resubmitBtn = document.getElementById("resubmit-btn");
// animal audio will play when user clicks on button 
submitBtn.addEventListener("click", function (){
  audio.play();
})

//generates the sandwich string to be placed onto the page
function generateSandwich() {
  //need to pull 1 random animal and 1 random plant from each database
  //this code will replicate that process but will likely be placed elsewhere
  submitBtn.setAttribute;
  var sandwichMsg = `Bon appettit! We call this one ${myAnimal} con ${myPlant} sandwich!\nEnjoy your scrumptuous sandwich!`;
  outputBox.textContent = sandwichMsg;
  init();
  setTimeout(testFunc, 10000);
}

submitBtn.addEventListener('click', generateSandwich);

function testFunc() {
  console.log(`Testing`);
}

submitBtn.addEventListener("click", function () {
  localStorage.setItem("myPlant", myPlant);
  localStorage.setItem("myAnimal", myAnimal);
});
