import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import styles from "./CardItem.module.css";

const CardItem = (props) => {
  const album = props.album;
  if (!album || !album.image || !album.title) {
    return null; // or render a placeholder card
  }

  // console.log(props.album.id);
  return (
    // <Card className={styles.card} sx={{ width:"10rem", height:"14.5rem" }}>
    <Card id={props.album.id} className={styles.card} sx={{ height: "15rem" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          // height="140"

          // image={sampleImage}
          image={album.image}
          alt={album.title}
          sx={{
            height: "10.625rem",
            width: "10rem",
            borderTopLeftRadius: "0.625rem",
            borderTopRightRadius: "0.625rem",
          }}
        />
        <CardContent
          sx={{
            backgroundColor: "white",
            padding: 0,
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
            padding: "0.2rem 0.5rem",
            width: "10rem",
            height: "2rem",
          }}
        >
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              fontWeight: 400,
              fontSize: "0.6rem",
              backgroundColor: "#121212",
              height: "1.5rem",
              width: "4.6rem",
              borderRadius: "1rem",
              padding: "0.25rem 0.3rem",
              textAlign: "center",
              lineHeight: "100%",
            }}
          >
            {/* 100 Follows */}
            {album.follows} Follows
          </Typography>
          {/* </CardContent>
          <CardContent> */}
          <Typography variant="body2" sx={{ color: "white" }}>
            {/* New Bollywood */}
            {album.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CardItem;
