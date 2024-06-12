import logoService from "../services/logo.service.js";

async function get(req, res, next) {
  try {
    throw new Error("wrong here");

    res
      .status(200)
      .cookie(
        "uuid",
        { uuid: "23jfdh7567ddcsdg86g65s8s75f5v5v9x2s" },
        { maxAge: 60 * 60 * 1 }
      )
      .send({ message: "hello" });
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await logoService.create(req.body.logo));
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
