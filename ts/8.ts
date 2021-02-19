class Player {
    name: string;
    age: number;
    adult: boolean;

    constructor(name: string, age: number, adult: boolean) {
        this.name = name;
        this.age = age;
        this.adult = adult;
    }
    play() {
        console.log("playing");
    }
    property() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.adult);
    }
}

const pp = new Player("aaa", 11, true);
pp.play();
pp.property()