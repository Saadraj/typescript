export class Player2 {
    public name: string;
    private age: number;
    readonly adult: boolean;

    constructor(name: string, age: number, adult: boolean) {
        this.name = name;
        this.age = age;
        this.adult = adult;
    }
    private play() {
        console.log("playing");
    }
    property() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.adult);
    }
}

const pp2 = new Player2("aaa", 11, true);
pp2.play();
pp2.property()
pp2.age=33
pp2.adult=false
console.log(pp2)