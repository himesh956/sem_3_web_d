const express = require('express');

const app=express();
app.use(express.json());
app.use(express.static(__dirname));

let products=[
  {id:1,name:"laptop",price:60000},
  {id:2,name:"mouse",price:900},
]
app.get("/products", (req, res) => {
    res.status(200).json(products);
});

app.post("/products", (req, res) => {

    products.push(req.body);
    res.json({message:"product added successfully "});
});

app.put("/products/:id", (req, res) => {
  let product=products.find(p=>p.id==req.params.id);

  Object.assign(product,req.body);
    res.json({message:"product updated successfully "});
});

app.delete("/products/:id", (req, res) => {

   products=products.filter(p=>p.id!=req.params.id);

    res.json({message:"product deleted successfully "});
});


app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
});