var myObj = {
    name: "om",
    id: 1,
};
var userData = /** @class */ (function () {
    function userData(name, id) {
        this.name = name;
        this.id = id;
    }
    return userData;
}());
var myUser = new userData("om", 1);
console.log(myUser);
