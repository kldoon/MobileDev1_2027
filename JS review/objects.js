const std1 = {
    name: "Ahmad",
    gpa: 95,
    city: "Hebron"
}

const std2 = {
    name: "Sarah",
    gpa: 96,
    city: "Dura"
}

console.log(std1);
std1.gpa = 80;
console.log(std1);

/*
std3 = {};
std3.name = "Saeed";
std3.city = std2.city;
std3.gpa = std2.gpa;
*/
std3 = { ...std2, name: "Saeed", university: "HU" };
// std3.name = "Saeed";

console.log(std3);
console.log(std2);