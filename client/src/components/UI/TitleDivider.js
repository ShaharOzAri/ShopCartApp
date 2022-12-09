import * as React from "react";
import Divider from "@mui/material/Divider";

export default function TitleDivider(props) {
  return (
    <Divider
      sx={{
        fontSize: 25,
        color: "black",
        textTransform: "uppercase",
        paddingBottom: "15px",
      }}
    >
      {props.Title}
    </Divider>
  );
}
