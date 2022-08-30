let myArray = [1, 2, 3];
let theSameArray = new Array(1, 2, 3);
console.log(theSameArray);
myArray[1]=20
console.log(myArray[1]);

myArray=["string",10,false];
console.log(myArray);

practiceArray=["What is the meaning of life?",42,true];
console.log(practiceArray);

const numbers = [10,20,30,40,50];
console.table(numbers);

const months=["Jan", "Feb", "Mar", "Apr", "May"];
console.table(months);

// traveling the array months
for(let i=0;i<months.length;i++) {
    console.log(months[i]);
}

// access to the values in the array
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers.length); // array dimension

numbers.push(60,70,80); 
numbers.unshift(-10,-20,-30);
console.table(numbers);

months.pop(); // deleting may
months.shift(); //deleting jan
months.splice(1,1); //deleting mar
