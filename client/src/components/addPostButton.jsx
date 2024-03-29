import Button from "@mui/material/Button";
import React from "react";
import { Navigate } from "react-router-dom";

function AddPostButton() {
  return (
    <React.Fragment>
      <Button
        variant="contained"
        onClick={() => <Navigate to="../pages/addpost" />}
      >
        {" "}
        Add Notice{" "}
      </Button>
    </React.Fragment>
  );
}
function EditPostButton() {
  return (
    <React.Fragment>
      <Button
        variant="contained"
        onClick={() => <Navigate to="../pages/editpost" />}
      >
        {" "}
        Edit Notice{" "}
      </Button>
    </React.Fragment>
  );
}

export { AddPostButton, EditPostButton };
