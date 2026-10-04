/*
int sum(int x, int y){
    int z= x+y;
    return z;
}
int res=sum(10,20)
cout<<res;
*/

function sum(x, y) {
    const z = x + y;
    return z;
}

const res = sum(10, 20);
console.log(res);

function printHello(name) {
    console.log("-------------------")
    console.log("Hello " + name)
    console.log("-------------------")
}

function printNames(names) {  //names are assumed Array
    if (Array.isArray(names)) {
        names.forEach(printHello);
    } else {
        console.log("Names is not an array!");
    }
}

const students_names = 15; //["Ahmad","Saeed","Hiba","Sarah"];
printNames(students_names);