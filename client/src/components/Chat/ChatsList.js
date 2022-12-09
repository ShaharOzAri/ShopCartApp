import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/material";
import { createSearchParams, useNavigate } from "react-router-dom";
import { getAllUsers } from "../../controller/UserController";
import { useState, useEffect } from "react";
import { SuccessSnackbar } from "../Utils/Snackbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "first_name",
    headerName: "First name",
    width: 200,
    editable: false,
  },
  {
    field: "last_name",
    headerName: "Last name",
    width: 200,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    editable: true,
  },
];

export default function ChatsList() {
  const [users, setUsers] = useState(null);

  const getAll = async () => {
    var recivedUsers = await getAllUsers();
    if (recivedUsers.status == 200) {
      var data = recivedUsers.data.msg;
      for (var i = 0; i < data.length; i++) {
        data[i].id = i + 1;
      }
      setUsers(data.filter((user) => user.chat === true));
    }
  };

  useEffect(() => {
    getAll();
  });

  const navigate = useNavigate();
  return (
    <Box>
      <Container style={{ height: 300, width: "60%" }}>
        <DataGrid
          sx={{
            backgroundColor: "#e0d9cc",
            borderColor: "black",
          }}
          onRowClick={(params, event) => {
            event.preventDefault();
            navigate(`/admin/chat/${params.row._id}`);
          }}
          rows={users != null ? users : []}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </Container>
    </Box>
  );
}
