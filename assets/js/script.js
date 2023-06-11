//API related variables
var animalAPI = "https://api.gbif.org/v1/species/search?rank=SPECIES&highertaxon_key=359&limit=100&offset=0"; //the end offsets the data
var plantsEntryRange = 30;
var animalsOffset = 5000;
var plantsOffset = 5000;
var dataRange = 100;
var taxonMammals = 359;
var taxonPlants = 6;

//data related variables
//data related variables
var searchHistory = [];
//data related variables
var searchHistory = [];
var historyNumber = 6;
var myPlant = "";
var myAnimal = "";
var myCountry = "";

//element related variables
var outputBox = document.getElementById("output-box");
var submitBtn = document.getElementById('submit-btn');
var submitCont = document.getElementById('submit-container');
var submitSection = document.getElementById('submit-section');
var hiddenTimer = 10000; // how long the button element is hidden for (in ms)
var loadingPlaceholder = document.createElement("p")
loadingPlaceholder.textContent =
  "Loading... Please Wait...";

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

//fetches an array of countries and chooses a random index for a random country
function getCountry(){
  var index = 0;
  fetch("https://restcountries.com/v3.1/all")
    .then(function (response){
      return response.json();
    })
    .then(function(data){
      index = randNum(data.length);
      console.log(data[index].name.common);
      myCountry = data[index].name.common;
    });
}

//gives a random number between 0 and num, not including num
function randNum(num) {
  return Math.floor(Math.random() * num);
}

//runs both getAnimal and getPlant functions
function generateIngredients() {
  getAnimal(taxonMammals, randNum(animalsOffset), randNum(dataRange));
  getPlant(taxonPlants, randNum(plantsOffset), randNum(dataRange));
}

// upon generation of webpage, the user will be presented with
// a box containing their last six generated sandwiches
function populateHistory() {
  for (var i = 0; i < searchHistory.length; i++) {
    var currentEl = document.getElementById(`sandwich-${i}`);
    currentEl.textContent = searchHistory[i];
  }
}

// saves user's sandwiches to local data
function savingHistory() {
  var saveData = JSON.stringify(searchHistory);
  localStorage.setItem("mySandwiches", saveData);
}

// if the user has local data, assigns that data to the searchHistory array
function loadHistory() {
  var loadData = JSON.parse(localStorage.getItem("mySandwiches"));
  searchHistory = loadData;
  console.log(loadData);
}

//pre generate the next sandwich
function init() {
  loadHistory();
  populateHistory();
  generateIngredients();
  getCountry();
  submitSection.appendChild(loadingPlaceholder);
  setTimeout(unhideButton, hiddenTimer);
}

//function to run on startup
init();

//generates the sandwich string to be placed onto the page
function generateSandwich(){   
  var sandwichMsg = `Bon appettit! We call this one "${myAnimal} con ${myPlant}" sandwich!\nEnjoy your scrumptuous sandwich!\nThis particular sandwich is quite popular in ${myCountry}`;
  outputBox.textContent = sandwichMsg;


  //pregen next sandwich
  generateIngredients();

  //pregen next country
  getCountry();

  //hide button for a certain delayed amount of time
  submitCont.setAttribute('class', 'is-hidden');  
  loadingPlaceholder.classList.remove('is-hidden');
  setTimeout(unhideButton, hiddenTimer); //delays the time button is revealed again

  //appending previous sandwich ingredients to array
  var sandwichIng = `${myAnimal} con ${myPlant}`;
  
  //makes certain that our history array is not larger than our historyNumber
  while (searchHistory.length >= historyNumber) {
    searchHistory.pop();
  }
  searchHistory.unshift(sandwichIng);

  //populate UI then save to localStorage
  populateHistory();
  savingHistory();
}

//unhides the button, meant to be called as a parameter to setTimeout()
function unhideButton(){
  console.log(`Testing`);
  loadingPlaceholder.setAttribute('class', 'is-hidden');
  submitCont.classList.remove('is-hidden');
  submitCont.setAttribute('class', 'is-centered');  
}

//the star of the show
submitBtn.addEventListener("click", generateSandwich);


