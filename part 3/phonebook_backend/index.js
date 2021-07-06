const { response } = require("express");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT;

const Phone = require("./models/phone");

app.use(express.json());
app.use(express.static("build"));

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :data")
);
app.use(cors());

morgan.token("data", function (req, res) {
  return JSON.stringify(req.body);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/api/phones", (req, res) => {
  Phone.find({}).then((phones) => {
    res.json(phones);
  });
});

app.get("/api/phones/:id", (req, res) => {
  Phone.findById(req.params.id)
    .then((phone) => {
      if (phone) {
        res.json(phone);
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => {
      console.log(error);
      response.status(400).send({ error: "malformatted id" });
    });
});

app.get("/info", (req, res) => {
  Phone.find({}).then((phone) => {
    res.send(`<p>Phonebook has info for ${phone.length} people.</p>
  <p>${new Date()}</p>`);
  });
});

app.delete("/api/phones/:id", (request, response) => {
  Phone.findByIdAndRemove(request.params.id)
    .then((result) => response.status(204).end())
    .catch((error) => {
      console.log(error);
    });
});

app.post("/api/phones", (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "name or number missing",
    });
  }

  const phone = new Phone({
    name: body.name,
    number: body.number,
  });

  phone.save().then((savedPhone) => {
    response.json(savedPhone);
  });
});

app.put("/api/phones/:id", (request, response) => {
  const body = request.body;
  const phone = {
    name: body.name,
    number: body.number,
  };

  Phone.findByIdAndUpdate(request.params.id, phone, { new: true })
    .then((updatedPhone) => {
      //new true makes mongo return the updated obj
      response.json(updatedPhone);
    })
    .catch((error) => console.log(error));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
