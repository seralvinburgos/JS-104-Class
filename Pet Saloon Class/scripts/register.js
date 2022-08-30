alert(4 + " pets are registered at this time");

const petsNames=["Scooby","Scrappy","Siopao","Boba"];
console.log(petsNames[0]);
console.log(petsNames[1]);
console.log(petsNames[2]);
console.log(petsNames[3]);

// console.table(petsNames);

//object literal
let petSaloon={
    //attributes
    name:"The Pet Saloon",
    phone:"555-555-5555",
    address:{
        state:" Florida",
        city:"Jacksonville",
        street:"Av. University",
        zip:"32258"
    },
    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Dane",
            service:"Grooming",
            owners:"Shaggy",
            phone:"666-666-6666"
        },
        {
            name:"Scrappy",
            age:40,
            gender:"Male",
            breed:"Mixed",
            service:"Nails cut",
            owners:"Shaggy",
            phone:"777-777-7777"
        },
        {
            name:"Siopao",
            age:6,
            gender:"Male",
            breed:"Westie-Mix",
            service:"Grooming",
            owners:"EJ",
            phone:"888-888-8888"
        },
        {
            name:"Boba",
            age:4,
            gender:"Female",
            breed:"Maltese-Yorkie",
            service:"Grooming",
            owners:"EJ",
            phone:"888-888-8888"
        }
    ] //pet's array
}
console.log(petSaloon.pets);

function displaySaloonInfo(){
document.getElementById("info").innerHTML=`
    <p>${petSaloon.name} is located in ${petSaloon.address.city},${petSaloon.address.state}</p>`;
}

function displayPetsNames(){
document.getElementById("info").innerHTML=`
    <p>${petSaloon.pets.name}</p>
    <p>${petsNames[1]}</p>
    <p>${petsNames[2]}</p>
    <p>${petsNames[3]}</p>`;
}
    // use alert to display the amount of pets (alert(),length)

    //travel the pets array
for(let i=0;i<petsNames.length;i++) {
    console.log(petsNames[i]);
} 

    //display on the console -> display them on the HTML

displaySaloonInfo();