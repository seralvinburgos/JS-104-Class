function displayPetCards() {
    const petsDiv = document.getElementById("pets");
    petsDiv.innerHTML=``; //clear the canvas
    //travel the array
    for(let i = 0; i < petSalon.pets.length; i++) {
        //get the pet
        let pet=petSalon.pets[i];
        //create the tmp
        let tmp = `
        <div class="pet">
            <p> Name : ${pet.name}</p>
            <p> Age : ${pet.age}</p>
            <p> Gender : ${pet.gender}</p>
            <p> Breed : ${pet.breed}</p>
            <p> Service : ${pet.service}</p>
            <p> Owners Name : ${pet.owners}</p>
            <p> Contact Phone : ${pet.phone}</p>
        </div>
        `;
        //insert the tmp into the html
        petsDiv.innerHTML+=tmp;
    }
}

function displayPetTable() {

}