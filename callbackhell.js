// Callback Hell

function getUser(callback) {
    setTimeout(() => {
        console.log("User received");
        callback();
    }, 1000);
}

function getOrders(callback) {
    setTimeout(() => {
        console.log("Orders received");
        callback();
    }, 1000);
}

function getPayment(callback) {
    setTimeout(() => {
        console.log("Payment received");
        callback();
    }, 1000);
}

getUser(() => {
    getOrders(() => {
        getPayment(() => {
            console.log("All tasks completed");
        });
    });
});