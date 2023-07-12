interface User {
  name: string;
  id: number;
}
let myObj: User = {
  name: "om",
  id: 1,
};

interface myData{
    name:string;
    id:number
}
class userData{
    name :string;
    id:number;
    constructor(name:string,id:number){
        this.name=name;
        this.id=id;
    }
}
const myUser:myData=new userData("om",1);
console.log(myUser);    
