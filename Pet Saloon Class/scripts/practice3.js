//js selectors
//ID, it returns one element
let inputName = document.getElementById("petName");
console.log(inputName);

//Class, it returns a collection of elements
let links = document.getElementsByClassName("link");

for(let i=0; i<links.length; i++) {
    links[i].setAttribute("target", "_blank");
    links[i].style.display="none";
}
console.log(links);

//Tag, it returns a collection of elements

let inputs = document.getElementsByTagName("input");
console.log(inputs);
for(let i=0; i<inputs.length; i++) {
    inputs[i].style.display="none";
}

//query, it reutrns one element
let home = document.querySelector("nav a.link");
console.log(home);

//hiding the select using querySelector
let selectInput = document.querySelector("#home");
selectInput.style.display="none";
console.log(home);