import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function LocationCard(props) {
  return (
    <Card
      sx={{
        bgcolor: "#eaece5",
        maxWidth: 550,
        ...props.sx,
      }}
    >
      <CardContent>
          <Typography component='div' letterSpacing={4} variant='h5'>
            {props.item.Title}
          </Typography>
        </CardContent>
        <CardMedia
          component='img'
          height='550'
          width='200'
          image={props.item.src}
          alt={props.item.alt}
        />
        <CardContent>
          <Typography component='div' letterSpacing={4} variant='h8'>
          <p>{props.item.city}</p>
          <p>{props.item.address}</p>
          <p>{props.item.hours}</p>
          </Typography>
        </CardContent>
    </Card>
  );
}
