let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };
let count = 0;

for (key in obj1) {
    if (obj1[key] === obj2[key]) {
        continue;
    } else {
        count++;
    }
}

if (count == 0) {
    console.log("Object is Same")
} else {
    console.log("Object is Different")
}