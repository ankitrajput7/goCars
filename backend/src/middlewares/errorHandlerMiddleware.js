const errorHandler = (err, req, res, next) => {
  console.log("STARTED ------------------------------ STARTED");
  // console.error("Error occurred:", err);
  console.log("ENDED -------------------------------- ENDED");

  res.status(500).send(err.message);
};

export default errorHandler;
