class Human {
    public name: string;
    public age: number; //private age: number; 에러발생
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human("Lynn", 18, "female")

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(lynn));

export {};