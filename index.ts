const name: string = "MUHAMMED"
console.log(name);

let numbers: number[] = [1,2,3,4,5];

function add(a:number, b:number): number{
    return a + b;
}
console.log(add(10,20));

//object
interface person{
    firstName:string;
    lastName: string;
    age?: number;
}

let user:person = {
    firstName:`IBRAHIM`,
    lastName:`MUHAMMED`,
    // age:`24`
}
console.log(`user:${user.firstName} ${user.lastName} ${user.age}`);

class student {
    studentName:string;

    constructor(name:string) {
        this. studentName = name;
    }

    greett():string {
        return `Hello, my name is ${this.studentName}`;
    }
}

let student1 = new student(`MUhAMMED.HYBEE`);
console.log(student1.greett());