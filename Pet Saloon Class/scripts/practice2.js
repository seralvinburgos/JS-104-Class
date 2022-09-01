//object literal
let lion ={
    name:"Simba",
    food:"Carnivore",
    isTheKingOfJungle:true
}
//object constructor

function Animal(name,food,isTheKingOfJungle){
    this.name=name;
    this.food=food;
    this.king=isTheKingOfJungle;
}

let obj1 = new Animal("Simba","Carnivore",true,20);
let obj2 = new Animal("Rafiki","Fruits",false,50);


function Family(name,age,relationship){
    this.name=name;
    this.age=age;
    this.relationship=relationship;
}

let obj3 = new Family("EJ",38,"wife");
let obj4 = new Family("Nela",9,"daughter");
let obj5 = new Family("Aven",5,"son");
