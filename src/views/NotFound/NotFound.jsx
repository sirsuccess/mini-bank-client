import React from "react";
import { Alert, Button } from "reactstrap";
import {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <Alert color="success">
        <h4 className="alert-heading">Oop! page Not found</h4>
        <p>kindly check URL address.</p>
        <Link to="/"> <Button>Back Home</Button> </Link>
      </Alert>
    </div>
  );
};

export default NotFound;
