// Promises

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User received");
        }, 1000);
    });
}

getUser()
    .then((data) => {
        console.log(data);
        return "Orders received";
    })
    .then((data) => {
        console.log(data);
        return "Payment received";
    })
    .then((data) => {
        console.log(data);
        console.log("All tasks completed");
    })
    .catch((error) => {
        console.log("Error:", error);
    });