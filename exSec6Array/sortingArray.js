// const numbers = [2, 3, 6, 5, 1, 4];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javaScript" },
];

courses.sort(function(a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses);