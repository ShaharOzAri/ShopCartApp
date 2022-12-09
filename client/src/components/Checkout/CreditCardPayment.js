import { Card } from "@mui/material";
import InputUnstyled from '@mui/base/InputUnstyled';
import { Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import * as React from 'react';
import { YearPicker } from '@mui/x-date-pickers';



export default function CreditCratPayment(){
    const [year, setYear] = React.useState('');

  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  const [month, setMonth] = React.useState('');

  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };

    return (
        <Container sx={{ textAlign: "center", maxWidth: 200}}>
            <Grid item xs={12} sm={6}>
        <Card  sx={{ textAlign: "center", mt: 3 }}>

            <div>hey</div>
            <Box
              component="form"
              noValidate
            //   onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
         <Grid item xs={1}>
                  <TextField
                    required
                    // fullWidth
                    // defaultValue={userDetails.password}
                    name="full-name"
                    label="Full Name"
                    type="text"
                    id="fullName"
                    // autoComplete="new-password"
                    // onChange={(event) =>
                    //   (user["password"] = event.target.value)
                    // }
     />
       <TextField
                    required
                    // fullWidth
                    // defaultValue={userDetails.password}
                    name="password"
                    label="CSV"
                    type="password"
                    id="CSV"
                    // autoComplete="new-password"
                    // onChange={(event) =>
                    //   (user["password"] = event.target.value)
                    // }
                    />
     </Grid>
     </Box>

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
            //   onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
             
                    required
                    fullWidth
                    // defaultValue={userDetails.last_name}
                    id="fullName"
                    label="Full Name"
                    name="fullName"
                    autoComplete="family-name"
                    // onChange={(event) =>
                    //   (user["last_name"] = event.target.value)
                    // }
                      />
                
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
           required
           autoComplete="given-name"
           defaultValue= "**** **** **** 7048"
           name="firstName"
           fullWidth
           id="cardNumber"
           label="Card Number"
           autoFocus
           // onChange={(event) =>
           //   (user["first_name"] = event.target.value)
           // }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    // defaultValue={userDetails.email}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    // onChange={(event) => (user["email"] = event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    defaultValue="2022-07"
                    name="month"
                    label="Month year"
                    type="month"
                    // placeholder="2022-07"
                    min="July 2022"
                    max="2026-07"
            
                    id="month"
                    helperText="hey"
                    // placeholder="YYYY-MM"
                    // onChange={(event) =>
                    //   (user["password"] = event.target.value)
                    // }
                  />
                  <TextField
  helperText="Please enter your name"
  id="demo-helper-text-aligned"
  label="Name"
><input lable="Name" type="month" id="start" name="start"
                 min="2018-07" value="2018-07" max="2026-07"/></TextField>
                  <Typography item xs={12}><input lable="Name" type="month" id="start" name="start"
                 min="2018-07" value="2018-07" max="2026-07" /></Typography>
                  
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
              <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    // defaultValue={userDetails.email}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    // onChange={(event) => (user["email"] = event.target.value)}
                  />
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
                
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="month-select-label">Month</InputLabel>
        <Select
          labelId="month-select-label"
          id="month-select"
          value={month}
          label="Month"
          onChange={handleChangeMonth}
        >
          <MenuItem value={[1, 2, 3, 4]}>January</MenuItem>
          <MenuItem value={2}>February</MenuItem>
          <MenuItem value={3}>March</MenuItem>
          <MenuItem value={4}>April</MenuItem>
          <MenuItem value={5}>May</MenuItem>
          <MenuItem value={6}>June</MenuItem>
          <MenuItem value={7}>July</MenuItem>
          <MenuItem value={8}>August</MenuItem>
          <MenuItem value={9}>September</MenuItem>
          <MenuItem value={10}>October</MenuItem>
          <MenuItem value={11}>November</MenuItem>
          <MenuItem value={12}>December</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="year-select-label">Year</InputLabel>
        <Select
          labelId="year-select-label"
          id="day-select"
          value={year}
          label="Year"
          onChange={handleChangeYear}
        >
          <MenuItem value={1}>2022</MenuItem>
          <MenuItem value={2}>2023</MenuItem>
          <MenuItem value={3}>2024</MenuItem>
          <MenuItem value={4}>2025</MenuItem>
          <MenuItem value={5}>2026</MenuItem>
      
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="year-select-label">Year</InputLabel>
        <Select
          labelId="year-select-label"
          id="day-select"
          value={year}
          label="Year"
          type="month"
        >
    
      
        </Select>
      </FormControl>

    <FormControl>
        <InputLabel>ccc</InputLabel>
    </FormControl>

            </Box>
        </Box>
        {/* <YearPicker/> */}
        <InputUnstyled 
        type='month'
        lable="Name"
        min="2018-07" value="2018-07" max="2026-07">
  <TextField
                    required
                    fullWidth
                    // defaultValue={userDetails.email}
              
                    // onChange={(event) => (user["email"] = event.target.value)}
                  />

        </InputUnstyled>
   
        </Card>
        </Grid>

        <Typography item xs={12}><input lable="Name" type="month" id="start" name="start"
                 min="2018-07" value="2018-07" max="2026-07" /></Typography>
        
</Container>


    );
}