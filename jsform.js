// Add a script tag to the bottom of the page for your code.
// Add an event listener to the button so that it calls a makeMadLib function when clicked.
// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

function libIt() {
    let storyDiv= document.getElementById("story"); 
    let person= document.getElementById("person").value; 
    let adjective= document.getElementById("adjective").value; 
    let noun=document.getElementById("noun").value; 


    storyDiv.innerHTML=  (`${person} fell off a ${adjective} ${noun} . It's funny right!!`); 

}

let button= document.getElementById("lib-button"); 
//addeventlistener keyword (event, function)
button.addEventListener('click', libIt); 

document.getElementById("story").style.color="orange"; 
document.getElementById("story").style.fontSize="30px"; 
document.getElementById("story").style.fontFamily="cursive"; 
document.getElementById("story").style.marginLeft="50px"; 


 