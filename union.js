// working with union types
function myFuntion(n) {
    if (typeof n === "string") {
        console.log(n.toUpperCase());
    }
    else {
        console.log(n);
    }
}
console.log(myFuntion("omsolanki"));
function myfullname(fm) {
    console.log("my name is : " + fm.name);
    console.log("my id is  :" + fm.id);
}
myfullname({ name: "om", id: 3 });
