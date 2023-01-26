let data = ["January", "February", "12 seconds ago", "12 minutes ago", "12 hours ago", "2022/01/20 12:00:00"];

data.sort(function (a, b) {
    let dateA = new Date(a);
    let dateB = new Date(b);

    // Check if the strings are in the format "12 seconds ago" etc
    if (isNaN(dateA)) {
        let timeA = parseInt(a.split(" ")[0]);
        let unitA = a.split(" ")[1];
        if (unitA === "seconds") {
            dateA = new Date(Date.now() - timeA * 1000);
        } else if (unitA === "minutes") {
            dateA = new Date(Date.now() - timeA * 1000 * 60);
        } else if (unitA === "hours") {
            dateA = new Date(Date.now() - timeA * 1000 * 60 * 60);
        }
    }

    if (isNaN(dateB)) {
        let timeB = parseInt(b.split(" ")[0]);
        let unitB = b.split(" ")[1];
        if (unitB === "seconds") {
            dateB = new Date(Date.now() - timeB * 1000);
        } else if (unitB === "minutes") {
            dateB = new Date(Date.now() - timeB * 1000 * 60);
        } else if (unitB === "hours") {
            dateB = new Date(Date.now() - timeB * 1000 * 60 * 60);
        }
    }

    let unitA = a.split(" ")[1];
    let unitB = b.split(" ")[1];

    // sorting by unit first
    if (unitA !== unitB) {
        if (unitA === "seconds") return -1;
        if (unitA === "minutes" && unitB !== "seconds") return -1;
        if (unitA === "hours" && unitB !== "seconds" && unitB !== "minutes") return -1;
        if (unitB === "seconds") return 1;
        if (unitB === "minutes" && unitA !== "seconds") return 1;
        if (unitB === "hours" && unitA !== "seconds" && unitA !== "minutes") return 1;
    }
    else {
        return dateA.getTime() - dateB.getTime();
    }
});

console.log("FORMATED DATA --->", data);
console.log("FORMATED DATA 2 --->", moment(data).fromNow());



// ///*/*/*/*/*/*/ 2 */*/*/*/*/*/*/*/*/


let moment = require('moment');

data.sort(function (a, b) {
    let dateA = new Date(a);
    let dateB = new Date(b);

    // Check if the strings are in the format "12 seconds ago" etc
    if (isNaN(dateA)) {
        let timeA = parseInt(a.split(" ")[0]);
        let unitA = a.split(" ")[1];
        if (unitA === "seconds") {
            dateA = new Date(Date.now() - timeA * 1000);
        } else if (unitA === "minutes") {
            dateA = new Date(Date.now() - timeA * 1000 * 60);
        } else if (unitA === "hours") {
            dateA = new Date(Date.now() - timeA * 1000 * 60 * 60);
        }
    }

    if (isNaN(dateB)) {
        let timeB = parseInt(b.split(" ")[0]);
        let unitB = b.split(" ")[1];
        if (unitB === "seconds") {
            dateB = new Date(Date.now() - timeB * 1000);
        } else if (unitB === "minutes") {
            dateB = new Date(Date.now() - timeB * 1000 * 60);
        } else if (unitB === "hours") {
            dateB = new Date(Date.now() - timeB * 1000 * 60 * 60);
        }
    }
    return dateA.getTime() - dateB.getTime();
});

for (let i = 0; i < data.length; i++) {
    if (moment(data[i], "YYYY/MM/DD HH:mm:ss", true).isValid()) {
        data[i] = moment(data[i], "YYYY/MM/DD HH:mm:ss").fromNow();
    }
}
console.log(data);


// ///*/*/*/*/*/*/ 3 */*/*/*/*/*/*/*/*/


data.sort((a, b) => {
    let dateA = new Date(a);
    let dateB = new Date(b);

    // Check if the strings are in the format "12 seconds ago" etc
    if (isNaN(dateA)) {
        let timeA = parseInt(a.split(" ")[0]);
        let unitA = a.split(" ")[1];

        // use switch statement for better readability
        switch (unitA) {
            case "seconds":
                dateA = new Date(Date.now() - timeA * 1000);
                break;
            case "minutes":
                dateA = new Date(Date.now() - timeA * 1000 * 60);
                break;
            case "hours":
                dateA = new Date(Date.now() - timeA * 1000 * 60 * 60);
                break;
        }
    }

    if (isNaN(dateB)) {
        let timeB = parseInt(b.split(" ")[0]);
        let unitB = b.split(" ")[1];

        switch (unitB) {
            case "seconds":
                dateB = new Date(Date.now() - timeB * 1000);
                break;
            case "minutes":
                dateB = new Date(Date.now() - timeB * 1000 * 60);
                break;
            case "hours":
                dateB = new Date(Date.now() - timeB * 1000 * 60 * 60);
                break;
        }
    }

    // sorting by unit first
    let unitA = a.split(" ")[1];
    let unitB = b.split(" ")[1];

    // use if else statement for better readability
    if (unitA !== unitB) {
        if (unitA === "seconds") return -1;
        if (unitA === "minutes" && unitB !== "seconds") return -1;
        if (unitA === "hours" && unitB !== "seconds" && unitB !== "minutes") return -1;
        if (unitB === "seconds") return 1;
        if (unitB === "minutes" && unitA !== "seconds") return 1;
        if (unitB === "hours" && unitA !== "seconds" && unitA !== "minutes") return 1;
    }
    else {
        return dateA.getTime() - dateB.getTime();
    }
});

data.sort((a, b) => {
    let dateA = new Date(a);
    let dateB = new Date(b);

    // Check if the strings are in the format "YYYY/MM/DD hh:mm:ss"
    if (!isNaN(dateA)) {
        let currentTime = Date.now();
        let timeDiff = currentTime - dateA.getTime();
        let seconds = Math.floor(timeDiff / 1000);
        let minutes = Math.floor(timeDiff / (1000 * 60));
        let hours = Math.floor(timeDiff / (1000 * 60 * 60));

        if (hours > 0) {
            a = `${hours} hours ago`;
        } else if (minutes > 0) {
            a = `${minutes} minutes ago`;
        } else {
            a = `${seconds} seconds ago`;
        }
    }

    if (!isNaN(dateB)) {
        let currentTime = Date.now();
        let timeDiff = currentTime - dateB.getTime();
        let seconds = Math.floor(timeDiff / 1000);
        let minutes = Math.floor(timeDiff / (1000 * 60));
        let hours = Math.floor(timeDiff / (1000 * 60 * 60));

        if (hours > 0) {
            b = `${hours} hours ago`;
        } else if (minutes > 0) {
            b = `${minutes} minutes ago`;
        } else {
            b = `${seconds} seconds ago`;
        }
    }

    // sorting by unit first
    let unitA = a.split(" ")[1];
    let unitB = b.split(" ")[1];

    if (unitA !== unitB) {
        if (unitA === "seconds") return -1;
        if (unitA === "minutes" && unitB !== "seconds") return -1;
        if (unitA === "hours" && unitB !== "seconds" && unitB !== "minutes") return -1;
        if (unitB === "seconds") return 1;
        if (unitB === "minutes" && unitA !== "seconds") return 1;
        if (unitB === "hours" && unitA !== "seconds" && unitA !== "minutes") return 1;
    }
    else {
        return a.split(" ")[0] - b.split(" ")[0];
    }
});


console.log(data);