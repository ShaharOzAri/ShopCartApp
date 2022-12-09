import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CategoryCard(props) {
  const navigate = useNavigate();
  const navigateToCategory = (filter) => {
    // 👇️ navigate to /
    navigate(`/category/${filter}`);
  };

  return (
    <Card
      sx={{
        bgcolor: "#eaece5",
        maxWidth: 550,
        ...props.sx,
      }}
    >
      <CardActionArea onClick={() => navigateToCategory(props.item.alt)}>
        <CardMedia
          component="img"
          height="550"
          width="300"
          image={props.item.src}
          alt={props.item.alt}
        />
        <CardContent>
          <Typography component="div" letterSpacing={4} variant="h5">
            {props.item.Title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
