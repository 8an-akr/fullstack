var UserAccount = /** @class */ (function () {
    function UserAccount(un, id) {
        this.name = un;
        this.id = id;
    }
    return UserAccount;
}());
var user = new UserAccount("eitan", 32);
deleteUser({ name: "dsd", id: 34234 });
deleteUser(user);
deleteUser(new UserAccount("sd", 323));
console.log(user);
function deleteUser(u) {
    //..
}
function getUser(id) {
    return {
        name: "sad",
        id: 4
    };
}
function bla(name) {
    console.log(name);
}
bla(10);
