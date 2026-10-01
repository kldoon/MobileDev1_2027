/*
for(int i=0;i<10;i++){
    j=j+i;
}
*/
// string name="Ahmad";

let j = 1;
for (i = 0; i < 10; i++) {
    j = j + i;
}
name = "Ahmad";

//int x=10;
x = 10
var z = 10
let y = 10

const a = 10
// a=20   wrong!

x = (x + 3 * (a * a) / y % 1);

if (x >= 20) {
    console.log("High Number!")
    console.log(x);
} else {
    console.log("Low Number!:" + (x * 2))
}

console.log("--------------------");
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
console.log("--------------------");

while (x >= 0) {
    console.log(x);
    x -= 2;
}

switch (x) {
    case 10:
        console.log("Hi")
        break;
    case -2:
        console.log("Bye")
        break;

    default:
        break;
}

//const arr=[];
const arr = ["Ahmad", "Saeed", 10, true, [1, 2, 3]];
console.log(arr)
console.log(arr[0])
arr[1]="Hiba"
console.log(arr)
console.log(arr[4][1])

