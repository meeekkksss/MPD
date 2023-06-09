//API related variables
var animalAPI = "https://api.gbif.org/v1/species/search?rank=SPECIES&highertaxon_key=359&limit=100&offset=0"; //the end offsets the data
var plantsEntryRange = 30;
var animalsOffset = 5000;
var plantsOffset = 5000;
var dataRange = 100;
var taxonMammals = 359;
var taxonPlants = 6;

var animalAPI =
  "https://api.gbif.org/v1/species/search?rank=SPECIES&highertaxon_key=359&limit=100&offset=0";

var searchHistory = [];
var historyNumber = 6;

var myPlant = "";
var myAnimal = "";
// animal audio
let myAudio = document.querySelector("#audio");
myAudio.play();

//element related variables
var outputBox = document.getElementById("output-box");
var submitBtn = document.getElementById('submit-btn');
var submitCont = document.getElementById('submit-container');
var submitSection = document.getElementById('submit-section');
var hiddenTimer = 10000; // how long the button element is hidden for (in ms)
var loadingPlaceholder = document.createElement("p")
loadingPlaceholder.textContent = "Loading... Please Wait...";

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

// upon generation of webpage, the user will be presented with
//a box containing their last six generated sandwiches
function populateHistory() {
  for (var i = 0; i < searchHistory.length; i++) {
    var currentEl = document.getElementById(`sandwich-${i}`);
    currentEl.textContent = searchHistory[i];
  }
}

function savingHistory() {
  var saveData = JSON.stringify(searchHistory);
  localStorage.setItem("mySandwiches", saveData);
}

function loadHistory() {
  var loadData = JSON.parse(localStorage.getItem("mySandwiches"));
  console.log(loadData);
  populateHistory();
}

//pre generate the next sandwich
function init() {
  populateHistory();
  generateIngredients();
  submitSection.appendChild(loadingPlaceholder);
  setTimeout(unhideButton, hiddenTimer);

  loadHistory();

}

//function to run on startup
init();

// animal audio will play when user clicks on button 
submitBtn.addEventListener("click", function (){
  audio.play();
})

//generates the sandwich string to be placed onto the page
function generateSandwich(){   
    //need to pull 1 random animal and 1 random plant from each database
    //this code will replicate that process but will likely be placed elsewhere
    var sandwichMsg = `Bon appettit! We call this one ${myAnimal} con ${myPlant} sandwich!\nEnjoy your scrumptuous sandwich!`;
    outputBox.textContent = sandwichMsg;

    //pregen next sandwich
    generateIngredients();

    //hide button for a certain delayed amount of time
    submitCont.setAttribute('class', 'is-hidden');  
    loadingPlaceholder.classList.remove('is-hidden');
    setTimeout(unhideButton, hiddenTimer); //delays the time button is revealed again

    //store sandwich onto local storage
    localStorage.setItem("myPlant", myPlant);


  //appending previous sandwich ingredients to array
  var sandwichIng = myAnimal + " con " + myPlant;
  
  while (searchHistory.length >= historyNumber) {
    searchHistory.pop();
  }
  searchHistory.unshift(sandwichIng);

  savingHistory();

    localStorage.setItem("myAnimal", myAnimal);
}

//unhides the button, meant to be called as a parameter to setTimeout()
function unhideButton(){
  console.log(`Testing`);
  loadingPlaceholder.setAttribute('class', 'is-hidden');
  submitCont.classList.remove('is-hidden');
  submitCont.setAttribute('class', 'is-centered');  
}

submitBtn.addEventListener("click", generateSandwich);
