import logoService from "../services/logo.service.js";
import { putLogoImageObject } from "../services/aws.service.js";

async function get(req, res, next) {
  try {
    res.status(200).send({ message: "getting logo successfully.", data: [] });
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const { fileName, contentType } = req.body;
    const url = await putLogoImageObject(fileName, contentType);

    res.status(201).send({ message: "url created successfully.", url });
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await logoService.update(req.params.id, req.body));
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await logoService.remove(req.params.id));
  } catch (err) {
    next(err);
  }
}

export default {
  get,
  create,
  update,
  remove,
};
