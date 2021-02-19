interface rectOptions {
    width: number;
    length: number;
}

function rectArea(options: rectOptions) {
    return options.width * options.length;
}

const a = rectArea({
    length: 11,
    width: 22,
});

console.log(a);

// *   interface for class

interface playerStructure {
    age: number;
    readonly adult: boolean;

    play(): void;

    getName(): string;
}

class Player3 implements playerStructure {
    private name: string;
    public age: number;
    readonly adult: boolean;
    constructor(name: string, age: number, adult: boolean) {
        this.name = name;
        this.age = age;
        this.adult = adult;
    }
    play() {
        console.log("playing");
    }
    getName() {
        return this.name;
    }
}
