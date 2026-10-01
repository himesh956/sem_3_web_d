const express = require("express");

const app = express();

app.use(express.json());

let products = [
    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 55000,
        quantity: 10
    },
    {
        id: 2,
        name: "Mobile",
        category: "Electronics",
        price: 25000,
        quantity: 20
    },
    {
        id: 3,
        name: "Chair",
        category: "Furniture",
        price: 3000,
        quantity: 15
    }
];

app.get("/products", (req, res) => {
    res.status(200).json(products);
});

app.get("/products/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.status(200).json(product);
});

app.post("/products", (req, res) => {

    const { name, category, price, quantity } = req.body;

    if (!name || !category || price === undefined || quantity === undefined) {
        return res.status(400).json({
            message: "Please provide name, category, price and quantity"
        });
    }

    const newProduct = {
        id: products.length > 0
            ? products[products.length - 1].id + 1
            : 1,

        name: name,
        category: category,
        price: price,
        quantity: quantity
    };

    products.push(newProduct);

    res.status(201).json({
        message: "Product added successfully",
        product: newProduct
    });
});

app.put("/products/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const { name, category, price, quantity } = req.body;

    if (name !== undefined) {
        product.name = name;
    }

    if (category !== undefined) {
        product.category = category;
    }

    if (price !== undefined) {
        product.price = price;
    }

    if (quantity !== undefined) {
        product.quantity = quantity;
    }

    res.status(200).json({
        message: "Product updated successfully",
        product: product
    });
});

app.delete("/products/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const deletedProduct = products.splice(productIndex, 1);

    res.status(200).json({
        message: "Product deleted successfully",
        product: deletedProduct[0]
    });
});

app.get("/products/category/:category", (req, res) => {

    const category = req.params.category;

    const categoryProducts = products.filter(
        p => p.category.toLowerCase() === category.toLowerCase()
    );

    if (categoryProducts.length === 0) {
        return res.status(404).json({
            message: "Category not found"
        });
    }

    res.status(200).json(categoryProducts);
});

app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
});