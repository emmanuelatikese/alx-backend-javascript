const readDatabase = require('./full_server/utils');

readDatabase("database.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((err) => {
        throw new Error(err);
    });
console.log("After!");

