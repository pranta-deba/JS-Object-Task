let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};

let lengths = 0;
for (const key in student) {
    lengths++;
}
console.log("this object property length is : ", lengths);