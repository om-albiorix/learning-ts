// working with union types

function myFuntion(n:number|string){
    if(typeof n==="string"){
        console.log(n.toUpperCase())
    }else{
        console.log(n)
    }
}
console.log(myFuntion("omsolanki"));

// type alias 

type name={
    name:string;
    id:number;
};

function myfullname(fm:name){
    console.log("my name is : " + fm.name)
    console.log("my id is  :" +  fm.id)    
}

myfullname({name:"om",id:3})