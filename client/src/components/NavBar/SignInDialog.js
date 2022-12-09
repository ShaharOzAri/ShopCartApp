import * as React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import SignInDialogContent from "./SignInDialogContent";

export default function SignInDialog(props) {
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Dialog onClose={handleClose} open={props.open}>
      <SignInDialogContent
        signUp={props.signUp}
        signIn={props.setOpen}
      ></SignInDialogContent>
    </Dialog>
  );
}
