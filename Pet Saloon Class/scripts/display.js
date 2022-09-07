/*function displayPetCards() {
    const petsDiv = document.getElementById("pets");
    petsDiv.innerHTML=''; //clear the canvas
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
} */

function displayPetTable() {
    const petsTbl = document.getElementById("petTable");
    for(let i = 0; i < petSalon.pets.length; i++) {
        let pet = petSalon.pets[i];
        let tmp = `
        <div>
            <table class="table table-striped mx-3 table-bordered">
                <thead>
                    <tr class="col">
                        <th class="col-1">Name</th>
                        <th class="col-1">Age</th>
                        <th class="col-1">Gender</th>
                        <th class="col-1">Breed</th>
                        <th class="col-1">Service</th>
                        <th class="col-1">Owners</th>
                        <th class="col-1">Phone#</th>
                    </tr>
                </thead>
                <tbody class="table">
                    <tr class="col">            
                        <td class="col-1">${pet.name}</td>
                        <td class="col-1">${pet.age}</td>
                        <td class="col-1">${pet.gender}</td>
                        <td class="col-1">${pet.breed}</td>
                        <td class="col-1">${pet.service}</td>
                        <td class="col-1">${pet.owners}</td>
                        <td class="col-1">${pet.phone}</td>
                </tbody>
            </table>
        </div>
        `;
        petsTbl.innerHTML+=tmp;
    }
}