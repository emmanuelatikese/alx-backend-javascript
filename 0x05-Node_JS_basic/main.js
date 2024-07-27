const countStudents = require('./3-read_file_async');

// countStudents("database.csv")
//     .then(() => {
//         console.log("Done!");
//     })
//         .catch((error) => {
//         console.log(error);
//     });
// console.log("After!");

countStudents('database.csv').then(msg => msg.forEach(s => console.log(s))).catch(err => console.log(err));