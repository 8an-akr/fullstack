interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;
  constructor(un: string, id: number) {
    this.name = un;
    this.id = id;
  }
}

const user: User = new UserAccount("eitan", 32);

deleteUser({ name: "dsd", id: 34234 });
deleteUser(user);
deleteUser(new UserAccount("sd", 323));
console.log(user);

function deleteUser(u: User) {
  //..
}

function getUser(id): User {
  return {
    name: "sad",
    id: 4,
  };
}

type MyName = "yontan" | "yehuda" | 10;

function myName(name: MyName): void {
  console.log(name);
}

type ArrStr = Array<string>;

function bla(arr: ArrStr): void {
  console.log(arr);
}

bla(["32", "sasass"]);

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

const test: Backpack<String> = {
  add: (x) => {
    console.log(x);
  },
  get: () => {
    return "0";
  },
};

test.add("pencil");
