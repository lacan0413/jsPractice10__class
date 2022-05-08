// class Card {
//     constructor(initName) {
//         this.name = initName
//     }
//     hello() {
//         console.log("hello", this.name);
//     }
// }

// const c1 = new Card("David");

// console.log("c1", c1);
// console.log(c1.name);

// c1.hello()


///////////extends//////////////

// class Car {
//     start() {
//         console.log("車子啟動");
//     }
// };

// class Car2 extends Car { };

// const p1 = new Car2();
// p1.start()


/////////super////////////

class Car {
    constructor(initName) {
        this.name = initName;
    }
    start() {
        console.log("車子啟動");
    }
};

class Car2 extends Car {
    constructor(para) {
        super(para);
    };
};

const p1 = new Car2("我的Car2");


p1.start();
console.log(p1.name);


