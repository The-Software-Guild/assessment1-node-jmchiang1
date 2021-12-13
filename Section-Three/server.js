const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
app.use(express.json());

const PORT = 3000;

var recycledItems = [
  { Name: "Newspaper", Description: "paper", Recyclable: true, Quantity: 10, PPU: 1, id: uuidv4() },
  { Name: "CardBoard", Description: "4x4 cardboard box", Recyclable: true, Quantity: 12, PPU: 10, id: uuidv4() },
  { Name: "Plastic Bottle", Description: "8oz Dasani Water Bottle", Recyclable: true, Quantity: 54, PPU: 1, id: uuidv4() },
  { Name: "Aluminum Can", Description: "Campbells Soup ", Recyclable: true, Quantity: 25, PPU: 5, id: uuidv4() },
  { Name: "iPhone", Description: "electronic device", Recyclable: false, Quantity: 73, PPU: 900, id: uuidv4() },
  { Name: "Plastic Bag", Description: "Wegman's plastic bag", Recyclable: false, Quantity:754, PPU: 3, id: uuidv4() },
];

app.get("/recycle",(req, res, next) => {
  res.status(200).send(recycledItems);
});

app.get("/recycle/:id", (req, res, next) => {
    let { id } = req.params;
    const findItem = recycledItems.filter((item) => item.id === id);   
    res.status(200).send(findItem);
})

app.post("/recycle", (req, res) => {
  var newItem = req.body;  
  console.log("REQ.BODY",newItem);
  recycledItems.push({...newItem, id: uuidv4() });
  res.status(200)
  .redirect("/recycle");
});

app.put("/recycle/:id", (req, res, next) => {
    let { id } = req.params;
    const { Name, Description } = req.body;
    const findItem = recycledItems.find((item) => item.id === id);
    if (id === undefined){
        const err = new Error("Task doesn't exist")
        next(err);
    }
    if (Name) findItem.Name = Name;
    if (Description) findItem.Description = Description;

    res.status(200).redirect("/recycle")
})

app.delete("/recycle/:id", (req, res, next) => {
    let { id } = req.params;
    recycledItems = recycledItems.filter((item) => item.id !== id);
    res.status(200).send(recycledItems);
})

app.use((req, res, next) => {
    const err = new Error("Task not found");
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        }
    })
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});