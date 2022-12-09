import { useAuth } from "../Utils/auth";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import {
  deleteuser,
  getUserById,
  updateUser,
} from "../../controller/UserController";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { SuccessSnackbar } from "../Utils/Snackbar";

export default function UserDetailsAdmin() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [snackbar, setSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState(null);

  const getUser = async (id) => {
    var recivedUser = await getUserById(id);
    if (recivedUser.status == 200) {
      setUser(recivedUser.data.msg);
    }
  };

  useEffect(() => {
    getUser(userId);
  }, []);

  var updatedUser = user;
  const navigate = useNavigate();
  const handleAllUsers = () => {
    navigate(-1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await updateUser(updatedUser);
    if (response.status == 200) {
      setSnackbarMsg("User Details Updated!");
      setSnackbar(true);
      navigate("/admin/users");
    } else {
      alert("somrthing went wrong");
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    const response = await deleteuser(updatedUser._id);
    if (response.status == 200) {
      alert("delete");
      navigate("/admin/users");
    } else {
      alert("somrthing went wrong");
    }
  };
  return (
    <Container sx={{ textAlign: "center", maxWidth: 200, bgcolor: "#e0d9cc" }}>
      {user != null ? (
        <Box sx={{ my: 5 }}>
          <Typography sx={{ fontSize: 40, color: "black" }}>
            {user.first_name} {user.last_name} User Details
          </Typography>
          <Button
            variant="contained"
            sx={{ m: 2, color: "black" }}
            onClick={handleAllUsers}
          >
            Back to All Users
          </Button>

          <Button
            variant="contained"
            sx={{ m: 2, color: "black" }}
            onClick={handleDelete}
          >
            Delete User
          </Button>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    defaultValue={user.first_name}
                    name="firstName"
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={(event) =>
                      (updatedUser["first_name"] = event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    defaultValue={user.last_name}
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={(event) =>
                      (updatedUser["last_name"] = event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    defaultValue={user.email}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(event) =>
                      (updatedUser["email"] = event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
              <Grid item xs={12}>
                <Select
                  fullWidth
                  id="role"
                  name="Role"
                  defaultValue={user.role}
                  label="role"
                  onChange={(event) => {
                    updatedUser["role"] = event.target.value;
                  }}
                >
                  <MenuItem value="client">Client</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                </Select>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, color: "black" }}
              >
                Update User Details
              </Button>
              <Grid
                container
                justifyContent="flex-end"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: 5,
                }}
              ></Grid>
            </Box>
          </Box>
        </Box>
      ) : (
        ""
      )}
      <SuccessSnackbar
        status={snackbar}
        message={snackbarMsg}
      ></SuccessSnackbar>
    </Container>
  );
}
