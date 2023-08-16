import express from "express";


//DATABASE MOCKING
let cars = [
  { id: 1, model: "tata", make: 2000 },
  { id: 2, model: "maruti", make: 2000 },
  { id: 3, model: "honda", make: 2000 },
  { id: 4, model: "mahindra", make: 2000 },
  { id: 5, model: "toyota", make: 2000 },
  { id: 6, model: "ford", make: 2000 },
];

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json(cars);
//   res.status(200).send() //send response of any type
});

app.post("/newcar", (req, res) => {
  const newcar = req.body;
  console.log(req.body)
  cars.push(newcar);
  res.json(cars);
});

app.put("/editcar/:idToEdit", (req, res) => {
    const id = Number(req.params.idToEdit);
    const userBody = req.body;
    
  cars.forEach((car, index) => {
    if (car.id === id) {
        cars[id - 1] = userBody;
    }
  });
  res.json(cars);
});

app.delete("/deletecar/:id", (req, res) => {
  const id = Number(req.params.id);
  cars = cars.filter((car) => car.id !== id);
  res.json(cars);
});

app.listen(3002, () => console.log("Server started at port 3002"));
