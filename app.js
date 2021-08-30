// var buick = {
//     make: "Buick",
//     model: "Enclave",
//     year: 2020,
//     available: true, 
//     description: "newest third row SUV lineup from Buick"
    
//   }
  
//   function display2() {
//     var place2= document.getElementById("clear3"); 
    
//     for (value in buick) {
//     place2.innerHTML = "Make: " + buick.make +  "<br>" +
//     "Model: " + buick.model + "<br>" +
//     "Year: " + buick.year + "<br>" +
//     "Available: " + buick.available + "<br>" +
//     "About: " + buick.description;  
//   }
// }

// function Movie(title, year, genre, cast) {
//     this.title= title;
//     this.year= year;
//     this.genre= genre;
//     this.cast=[cast]; 
//   }
  
//   // A method on the object //function in an object 
//   Movie.prototype.read= function() {
//     var place3= document.getElementById("clear3")
//     place3.innerHTML=( document.write("Title " + this.title + "Year " + this.year + "Genre " + this.genre + "Actors: " + this.cast)); 
   
//   }
  
  
//   // // Instantiating a new object
//   var movie1= new Movie ("The Color Purple", 1982, "Drama", ["whoopi", "oprah"]);
//   movie1.read(); 
//   var movie2= new Movie ("The Color Purple", 1982, "Drama", ["whoopi", "oprah"]);
//   movie2.read(); 
//   var movie3= new Movie ("The Color Purple", 1982, "Drama", ["whoopi", "oprah"]);
//   movie3.read(); 
// (In the JavaScript) Change the body tag's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily= "cursive, sans-serif"; 
// (In the JavaScript) Replace each of the spans (nickname, favorites, hometown) with your own information.
document.getElementById("nickname").textContent="Long"; 
document.getElementById("favorites").innerHTML= "politics, coding, volleyball, kids"; 
document.getElementById("hometown").textContent= "Thornton, CO"; 
// Iterate through each li and change the class to "list-item".
var items= document.getElementsByTagName('li'); 
for (let i=0; i< items.length; i++) {
    items[i].classname= 'list-item'; 
}
// (In the HTML head) Add a style tag that sets a rule for .list-item to make the color red.

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
var myPicture= document.createElement('img');
myPicture.src= "https://upload.wikimedia.org/wikipedia/commons/1/17/Beyonc%C3%A9_at_The_Lion_King_European_Premiere_2019.png"
document.body.appendChild(myPicture); 