let a = [1,2,"hello",3,4];
// console.log(typeof a)

a.forEach(val => {
    let b = val + 2; 
    // console.log(b)
});
// -------------------------------------------------------------

let map = a.map(val => {
    return val + 2;
})
// console.log(map)
// -------------------------------------------------------------
// filter is used when there is expectation
// of creating a new array from the existing array
// and the new array can be small or big in length than the existing array
// filter = remove some keep some 

let filter = a.filter(val => {
    if(val > 12){return true}
    // else {return false};
})

// console.log(filter)
//--------------------------------------------------------------

let find = a.find(val =>{
    if (val === 12) {
        return true
    }
})
// console.log(find)
// --------------------------------------------------------
// Object
// to ways to access obj.prop = obj["prop"]
// Object.freeze(obj) - it will make the object immutable else value can be changed

let obj = {
    name: "John",
    age: 20,
    address: {
        city: "Delhi",
        state: "DL"
    }
}
// Object.freeze(obj)
// obj.age = 13
// console.log(obj.age,obj["address"])
// --------------------------------------------------------
// function has length
// No of params in fnc = fnc.length
// bcoz function is an object
// everthing in JS is basically an object

let add = (a) => {
    let c = "hello";
    return c;
}
console.log(add())
// --------------------------------------------------------
