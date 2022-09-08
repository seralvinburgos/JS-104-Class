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
let c=0;
function Pet(name,age,gender,breed,service,ownersName,contactPhone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.owners = ownersName;//*
    this.phone = contactPhone;//*
    this.id=c++;
}

function displaySalonInfo(){
}

// get the values from the inputs
let nameInput = document.getElementById("petName");
let ageInput = document.getElementById("petAge");
let genderInput = document.getElementById("petGender");
let breedInput = document.getElementById("petBreed");
let ownersName = document.getElementById("ownersName");
let serviceSelect = document.getElementById("petService");
let phoneInput = document.getElementById("contactPhone");

function isValid(aPet) {
    let valid = true;

    if(aPet.name == "" || aPet.service == ""){
        valid = false;
    }
    return valid;  
}

function register(){
    console.log(nameInput.value, ageInput.value, genderInput.value, breedInput.value, ownersName.value, serviceSelect.value, phoneInput.value);
    //get the values from the inputs field from HTML
    //once value is received, create an obj using the object constructor
    let thePet = new Pet(nameInput.value, ageInput.value, genderInput.value, breedInput.value, ownersName.value,serviceSelect.value, phoneInput.value);

    if(isValid(thePet)){
    //push the object in the array
    petSalon.pets.push(thePet);
    clearInputs();
    displayPetTable();
    }else{
        alert("Please add the required information.");
    }
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

function deletePet(id){
    let removeIndex; 
    // searching the pet id into the array
    for(let i=0; i<petSalon.pets.length; i++) { //traveling the array
        let pet = petSalon.pets[i]; // get a pet values
        if(pet.id==id){ // compare the id with pets id's in the array
            removeIndex = i; // get the location of the pet
        }
    }
    petSalon.pets.splice(removeIndex,1); // remove the pet from the array
    document.getElementById(id).remove(); // remove the pet from the html
}

function search(){
    let searchString = document.getElementById("petSearch").value;
    let searchIndex;
    for(let i=0; i<petSalon.pets.length; i++) { //traveling the array
        let pet = petSalon.pets[i]; // get a pet values
        if(pet.name==searchString){ // compare the id with pets id's in the array
            searchString = i; // get the location of the pet
            console.log("I found it!");
        }
    }
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
    let siopao = new Pet("Siopao",6,"Male","Westie","Grooming","EJ","999-999-9999");
    petSalon.pets.push(siopao);

    displayPetTable();
}

window.onload=init;
