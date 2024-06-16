"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 다음 코드가 오류가 없으면 통과!
const ud2 = { id: 1, name: "HH", addr: "Seoul" };
const ud3 = { id: 1, dname: "HH", captain: "HH", addr: "Seoul" };
class Pet {
    name;
    age;
    explicit = "Hello, Typescript";
    implicit = "Hello, Typescript"; // Literal Type!
    constructor(name) {
        this.name = name;
    }
    setAge(xage) {
        this.age = xage * 12;
    }
    getAge() {
        return (this.age ?? 0) / 12;
    }
    move() {
        console.log("Pet is moving!!");
    }
    // getter
    getName() {
        return this.name;
    }
}
class Dog extends Pet {
    constructor(name, age) {
        super(name);
        this.setAge(age);
    }
    bark() {
        console.log("멍멍!", this.name);
    }
    howling() {
        console.log("아~오~", this.name);
    }
    move() {
        console.log("어슬렁 어슬렁", this.name);
    }
}
class Cat extends Pet {
    kukuki() {
        kk();
    }
    bark() {
        barkOfCat.bind(this)();
    }
}
const lucy = new Dog("Lucy", 10);
lucy.bark();
lucy.move();
const maxx = new Dog("Max", 12);
maxx.howling();
console.log("🚀  maxx:", maxx.getName(), maxx.getAge());
const happy = new Cat("Happy");
happy.setAge(5);
happy.bark();
happy.kukuki();
class CatDog extends Dog {
    kukuki() {
        kk();
    }
    bark() {
        barkOfCat.bind(this)();
    }
}
function kk() {
    console.log("꾹!꾹!");
}
function barkOfCat() {
    console.log("야옹!", this.name);
}
