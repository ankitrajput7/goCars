import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

function PrivateRouter({ element }) {
  const login = false;
  return login ? element : <Navigate to="/" />;
}

PrivateRouter.propTypes = {
  element: PropTypes.object.isRequired,
};

export default PrivateRouter;
