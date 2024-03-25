import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";

interface IProjectCard {
  heading: string;
  description: string;
  image: string;
}

export default function ProjectsCard({
  heading,
  description,
  image,
}: IProjectCard) {
  return (
    <Card elevation={3}>
      <CardMedia
        component="img"
        image={image}
        alt="Image"
        // title
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        {/* <Button size="small"></Button> */}
      </CardActions>
    </Card>
  );
}
