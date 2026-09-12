// Async / Await

function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User received");
        }, 1000);
    });
}

async function getData() {
    try {
        const user = await getUser();
        console.log(user);

        const orders = "Orders received";
        console.log(orders);

        const payment = "Payment received";
        console.log(payment);

        console.log("All tasks completed");
    } catch (error) {
        console.log("Error:", error);
    }
}

getData();