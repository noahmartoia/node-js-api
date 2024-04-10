import { mockpasta } from "../data/mock.js";
import pasta from "../models/pasta.js"; // Import the pasta model
import { validationResult } from "express-validator";

export const getpastas = (req, res) => {
  pasta.find()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
      // res.status(400).json({ message: error.message });
    });
};

export const getpasta = (req, res) => {
  const id = req.params.id;
  pasta.findById(id)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
      // res.status(400).json({ message: error.message });
    });
};

export const getError = (req, res) => {
  throw new Error("This is an error");
};

export const createpasta = (request, response) => {
  const bodyContent = request.body;
  const errors = validationResult(request);
  console.log(errors);
  // on cree un nouvelle instance de pasta
  const newpasta = new pasta(bodyContent);

  // on sauvegarde la nouvelle instance de pasta
  newpasta
    .save()
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
      // response.status(400).json({ message: error.message });
    });
  // const id = mockpasta.length + 1;
  // const newpasta = { id, ...bodyContent };
  // mockpasta.push(newpasta);
  // response.status(201).json(newpasta);
};

export const udpatepasta = (request, response) => {
  const id = parseInt(request.params.id, 10);
  const bodyContent = request.body;
  const pasta = mockpasta.find((pasta) => pasta.id === id);
  if (pasta) {
    const updatedpasta = { ...pasta, ...bodyContent };
    const index = mockpasta.findIndex((pasta) => pasta.id === id);
    mockpasta[index] = updatedpasta;
    response.json(updatedpasta);
  } else {
    response.status(404).json({ message: "pasta not found" });
  }
};

export const deletepasta = (request, response) => {
  const id = parseInt(request.params.id, 10);
  const pasta = mockpasta.find((pasta) => pasta.id === id);
  if (pasta) {
    mockpasta = mockpasta.filter((pasta) => pasta.id !== id);
    response.status(204).end();
  } else {
    response.status(404).json({ message: "pasta not found" });
  }
};