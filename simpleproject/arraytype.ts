var person: {
    name: string;
    age: number;
    hobby: string[];
}={
    name: "Andrean Yogatama",
    age: 24,
    hobby:["Bike", "Coding"],
 }

 let exampleArrayString: string[];
 exampleArrayString = ["1", "2", "4"];

 let exampleArrayMix: any[];
 exampleArrayMix = ["1", 2, "3"];

 let randomNumber: number[];
 randomNumber = [1, 2, 4, 6.6];

 console.log(person.name);
 for(const data of person.hobby){
     console.log(data);
 }
let isNumberTwo = exampleArrayString.filter((value: string) => {
    return (value == "2")
});
console.log(isNumberTwo);

let totalNumber = randomNumber.reduce((total: number, value: number) => {
    return (total + value);
}, 0);
console.log(totalNumber);

let multipleNumber = randomNumber.map((value: number) => {
    return (value * 2);
});
console.log(multipleNumber);