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
      response.status(500).end();
    });
});

app.get("/info", (req, res) => {
  res.send(`<p>Phonebook has info for ${phones.length} people.</p>
            <p>${new Date()}</p>`);
});

app.delete("/api/phones/:id", (request, response) => {
  const id = Number(request.params.id);
  phones = phones.filter((phone) => phone.id !== id);

  response.status(204).end();
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
