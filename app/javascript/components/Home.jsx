import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Hello</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <hr className="my-4" />
        <Link
          to="/"
          className="btn btn-lg custom-button"
          role="button"
        >
          Hi
        </Link>
        <br />
        <Button variant="contained">Hello World</Button>
      </div>
    </div>
  </div>
);
