// Basic CRUD in JavaScript
let users = [
    { id: 1, name: "Himesh", age: 20 },
    { id: 2, name: "Rahul", age: 21 }
];


// CREATE
function createUser(name, age) {
    let newUser = {
        id: users.length + 1,
        name: name,
        age: age
    };

    users.push(newUser);
    console.log("User created:", newUser);
}
// READ
function getUsers() {
    console.log("All Users:");
    console.log(users);
}
// UPDATE
function updateUser(id, newName, newAge) {
    let user = users.find(user => user.id === id);

    if (user) {
        user.name = newName;
        user.age = newAge;

        console.log("User updated:", user);
    } else {
        console.log("User not found");
    }
}
// DELETE
function deleteUser(id) {
    users = users.filter(user => user.id !== id);

    console.log("User deleted");
}
createUser("Aman", 22);

getUsers();

updateUser(1, "Himesh Rajput", 21);

getUsers();

deleteUser(2);

getUsers();