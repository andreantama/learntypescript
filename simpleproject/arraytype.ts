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

 console.log(person.name);
 for(const data of person.hobby){
     console.log(data);
 }