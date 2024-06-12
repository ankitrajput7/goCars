import mysqlQueryConn from "./db.service.js";

async function getMultiple() {
  const [rows] = await mysqlQueryConn(`SELECT * FROM cars`);
  return { rows };
}

async function create(logo) {
  console.log(logo);
  const result = await mysqlQueryConn("INSERT INTO cars VALUES (?)", logo);

  console.log(result);
  let message = "Error in creating new logo";

  if (result[0].affectedRows) {
    message = "logo created successfully";
  }

  return { message };
}

async function update(id, logo) {
  let message = "Error in updating logo";

  if (result.affectedRows) {
    message = "logo updated successfully";
  }

  return { message };
}

async function remove(id) {
  let message = "Error in deleting logo";

  if (result.affectedRows) {
    message = "logo deleted successfully";
  }

  return { message };
}

export default {
  getMultiple,
  create,
  update,
  remove,
};
