let petSalon={
    name:"Fresh Pet",
    phone:"555-555-5555",
    address:{
        state:" Florida",
        city:"Jacksonville",
        street:"Av. University",
        zip:"32258"
    },
    pets:[]
}

//constructor
function Pet(name,age,gender,breed,service,ownersName,contactPhone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.owners = ownersName;//*
    this.phone = contactPhone;//*
}

// get the values from the inputs
let nameInput = document.getElementById("petName");
let ageInput = document.getElementById("petAge");
let genderInput = document.getElementById("petGender");
let breedInput = document.getElementById("petBreed");
let ownersName = document.getElementById("ownersName");
let serviceSelect = document.getElementById("petService");
let phoneInput = document.getElementById("contactPhone");

function register(){
    console.log(nameInput.value, ageInput.value, genderInput.value, breedInput.value, ownersName.value, serviceSelect.value, phoneInput.value);
    //get the values from the inputs field from HTML
    //once value is received, create an obj using the object constructor
    let thePet = new Pet(nameInput.value, ageInput.value, genderInput.value, breedInput.value, ownersName.value, serviceSelect.value);
    //push the object in the array
    petSalon.pets.push(thePet);
    //display the object in the console
    console.log(petSalon.pets);
    clearInputs();
}

function clearInputs(){
    nameInput.value="";
    ageInput.value="";
    genderInput.value="";
    breedInput.value="";
    ownersName.value="";
    serviceSelect.value="";
    phoneInput.value="";
}
function init(){
    console.log("Registering");
    displaySalonInfo();
    let scooby = new Pet("Scooby",60,"Male","Dane","Grooming","Shaggy","666-666-6666");
    petSalon.pets.push(scooby);
    let shaggy = new Pet("Shaggy",50,"Male","Westie","Grooming","Shane","555-555-5555");
    petSalon.pets.push(shaggy);
    let boba = new Pet("Boba",14,"Female","Morkie","Grooming","EJ","999-999-9999");
    petSalon.pets.push(boba);
    let siopao = new Pet("Siopao",6,"Male","Westie-Mix","Grooming","EJ","999-999-9999");
    petSalon.pets.push(siopao);
}
window.onload=init;
