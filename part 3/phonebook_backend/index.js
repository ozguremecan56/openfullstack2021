const { response } = require("express");
const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :data")
);

morgan.token("data", function (req, res) {
  return JSON.stringify(req.body);
});

let phones = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/api/phones", (req, res) => {
  res.json(phones);
});

app.get("/api/phones/:id", (req, res) => {
  const id = Number(req.params.id);
  const phone = phones.find((phone) => phone.id === id);
  if (phone) {
    res.json(phone);
  } else {
    res.status(404).end();
  }
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

generateId = () => {
  const maxId =
    phones.length > 0 ? Math.max(...phones.map((phone) => phone.id)) : 0;
  return maxId + 1;
};

app.post("/api/phones", (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "name or number missing",
    });
  }

  if (phones.some((phone) => phone.name === body.name)) {
    return response.status(400).json({
      error: "this name already exists in phonebook",
    });
  }

  const phone = {
    id: generateId(),
    name: body.name,
    number: body.number,
  };

  phones = phones.concat(phone);

  response.json(phone);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
