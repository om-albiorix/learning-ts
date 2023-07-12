function myFunction(fn:(a:string)=>void){
    console.log(fn("hello Om"));
}
function mygetfunction(s:string){
    console.log(s)
}
myFunction(mygetfunction);
