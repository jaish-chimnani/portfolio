import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
  IconButton,
  CardActions,
} from "@mui/material";
import React from "react";
import Resources from "../../config/resources";
import { FcLike } from "react-icons/fc";
import { IoShareSocial } from "react-icons/io5";


interface IBlogCard {
  subHeading: string;
  text: string;
  heading: string;
}

export default function Blogcard({ subHeading, text, heading }: IBlogCard) {
  return (
    <Card>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar className="bg-red-500" aria-label="recipe">
              R
            </Avatar>
          }
          action={<IconButton aria-label="settings">:</IconButton>}
          title={heading}
          subheader={subHeading}
        />

        <CardMedia
          component="img"
          height="140"
          image={Resources.images.projectCard.projectCard}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FcLike />
        </IconButton>
        <IconButton aria-label="share">
          <IoShareSocial />
        </IconButton>
      </CardActions>
    </Card>
  );
}
