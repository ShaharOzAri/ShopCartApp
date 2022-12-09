import { useAuth } from "../Utils/auth";
import { useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { updateUser, deleteuser } from "../../controller/UserController";
import { useEffect, useState } from "react";

export const UserDetails = () => {
  const auth = useAuth();
  const [userDetails, setUser] = useState(null);
  var user = JSON.parse(auth.getUser());
  // var user = auth.user;

  const setUserDetails = () => {
    setUser(JSON.parse(auth.getUser()));
  };

  useEffect(() => {
    setUserDetails();
  }, []);

  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await updateUser(user);
    if (response.status == 200) {
      auth.update(user);
      if (!auth.user || JSON.parse(auth.getUser()).role == "client") {
        navigate("/ ");
      } else {
        navigate("/admin/");
      }
      alert("user Details updated");
    } else {
      alert("somrthing went wrong");
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    const response = await deleteuser(user._id);
    if (response.status == 200) {
      auth.logout();
      alert("delete");
      navigate("/");
    } else {
      alert("something went wrong");
    }
  };

  return (
    <Container sx={{ textAlign: "center", maxWidth: 200, bgcolor: "#e0d9cc" }}>
      {userDetails != null ? (
        <Box sx={{ my: 5 }}>
          <Typography sx={{ fontSize: 40, color: "black" }}>
            Welcome {userDetails.first_name}
          </Typography>
          <Button
            variant="contained"
            sx={{ m: 2, color: "black" }}
            onClick={handleLogout}
          >
            LogOut
          </Button>
          <Button
            variant="contained"
            sx={{ m: 2, color: "black" }}
            onClick={handleDelete}
          >
            Delete My User
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
                    defaultValue={userDetails.first_name}
                    name="firstName"
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={(event) =>
                      (user["first_name"] = event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    defaultValue={userDetails.last_name}
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={(event) =>
                      (user["last_name"] = event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    defaultValue={userDetails.email}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(event) => (user["email"] = event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    defaultValue={userDetails.password}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(event) =>
                      (user["password"] = event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12}></Grid>
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
    </Container>
  );
};
