import * as React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import SignUpDialogContent from "./SignUpDialogContent";

export default function SignUpDialog(props) {
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Dialog onClose={handleClose} open={props.open}>
      <SignUpDialogContent
        signIn={props.signIn}
        signUp={props.setOpen}
      ></SignUpDialogContent>
    </Dialog>
  );
}
