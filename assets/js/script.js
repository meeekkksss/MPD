// Animal+ Plants API
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
            console.log(data);
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
// function to generate images 
   function generateImage() {
     var selectedAnimal = document.getElementById("animalSelect").value;
     var imageContainer = document.getElementById("imageContainer");

     var animalImages = {
       longneck:
         "https://images.unsplash.com/photo-1501703979959-cd0db616f57d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGxvbmdlbmNlfGVufDB8fDB8fHw%3D&auto=format&fit=crop&w=500&q=60",
       cat: "https://images.unsplash.com/photo-1560807707-9f82aea47d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0JTIwYmFyfGVufDB8fDB8fHw%3D&auto=format&fit=crop&w=500&q=60",
       polarbear:
         "https://images.unsplash.com/photo-1564419326-38f49436a18b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9sYXJiZWFyfGVufDB8fDB8fHw%3D&auto=format&fit=crop&w=500&q=60",
       pandas:
         "https://images.unsplash.com/photo-1516476962-1aa4fd095a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZGFzJTIwc2FuZHdpY2hlc3xlbnwwfHwwfHx8&auto=format&fit=crop&w=500&q=60",
       lemur:
         "https://images.unsplash.com/photo-1613250950212-1397a7d0e676?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGxlbXVyfGVufDB8fDB8fHw%3D&auto=format&fit=crop&w=500&q=60",
       sammie1:
         "https://images.unsplash.com/photo-1556905058-9fc4b273ac2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNhbmR3aGljaHxlbnwwfHwwfHx8&auto=format&fit=crop&w=500&q=60",
       sammie2:
         "https://images.unsplash.com/photo-1523340899745-43ea39480304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhbmR3aGljaHxlbnwwfHwwfHx8&auto=format&fit=crop&w=500&q=60",
       sammie3:
         "https://images.unsplash.com/photo-1603966150677-cf6f8e7b1f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNhbmR3aGljaHxlbnwwfHwwfHx8&auto=format&fit=crop&w=500&q=60",
       sammie4:
         "https://images.unsplash.com/photo-1513818169866-aae9ec3123e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FuZHdpY2hlc3xlbnwwfHwwfHx8&auto=format&fit=crop&w=500&q=60",
       sammie5:
         "https://images.unsplash.com/photo-1582944658356-0daab2565bca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FuZHdpY2hlc3xlbnwwfHwwfHx8&auto=format&fit=crop&w=500&q=60",
       sammie6:
         "https://images.unsplash.com/photo-1532620450187-2b41a20d39ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2FuZHdpY2hlc3xlbnwwfHwwfHx8&auto=format&fit=crop&w=500&q=60",
       sammie7:
         "https://images.unsplash.com/photo-1560448204-10609d50ca0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbmR3aGljaHxlbnwwfHwwfHx8&auto=format&fit=crop&w=500&q=60",
       sammie8:
         "https://images.unsplash.com/photo-1616681510845-31f59e8823e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhbmR3aGljaHxlbnwwfHwwfHx8&auto=format&fit=crop&w=500&q=60",
       sammie9:
         "https://images.unsplash.com/photo-1574809575439-2fd3a88d7b8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNhbmR3aGljaHxlbnwwfHwwfHx8&auto=format&fit=crop&w=500&q=60",
     };

     var imageContainer = document.getElementById("imageContainer");
     var animalSelect = document.getElementById("animalSelect");

     function generateImage() {
       var selectedValue = animalSelect.value;
       var imageUrl = animalImages[selectedValue];
       if (imageUrl) {
         var imgElement = document.createElement("img");
         imgElement.src = imageUrl;
         imgElement.alt = selectedValue;
         imageContainer.innerHTML = "";
         imageContainer.appendChild(imgElement);
       }
     }

     function generateIngredients() {
       var sandwichString = generateSandwich();
       var boxElement = document.querySelector(".box");
       boxElement.textContent = sandwichString;
     }

     var submitBtn = document.getElementById("submit-btn");
     submitBtn.addEventListener("click", function () {
       generateImage();
       generateIngredients();
     });

     function generateSandwich() {
       var tempArr1 = ["horse", "frog", "panda", "elephant", "capybara"];
       var tempArr2 = [
         "eucalyptus",
         "basil",
         "evergreen",
         "crab grass",
         "leeks",
       ];
       var var1 = tempArr1[randNum(tempArr1.length)];
       var var2 = tempArr2[randNum(tempArr2.length)];
       var returnString =
         "You got a " + var1 + " sandwich with " + var2 + " sauce!";
       return returnString;
     }

     function randNum(max) {
       return Math.floor(Math.random() * max);
     }
   }