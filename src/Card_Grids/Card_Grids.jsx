import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardItem from "../CardItem/CardItem";

const CardGrid = (props) => {
  // console.log(props.albums);
  if (!Array.isArray(props.albums) || props.albums.length === 0) {
    return <div>Loading albums...</div>; // or return null if you want nothing
  }

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {props.albums.map((album) => (
        // <Grid item xs={12} sm={6} md={4} key={album.key}>
        <Grid item size={1.714} key={props.albums.key}>
          <CardItem album={album} active={props.active} />
        </Grid>
      ))}

      {/* <Grid size={1.714}>
        <CardItem />
      </Grid>
      <Grid size={1.714}>
        <CardItem />
      </Grid>
      <Grid size={1.714}>
        <CardItem />
      </Grid>
      <Grid size={1.714}>
        <CardItem />
      </Grid>
      <Grid size={1.714}>
        <CardItem />
      </Grid>
      <Grid size={1.714}>
        <CardItem />
      </Grid>
      <Grid size={1.714}>
        <CardItem />
      </Grid> */}
    </Grid>
  );
};
export default CardGrid;

// {albums.map((album) => (
//       <Grid size={1.714}>
//         <CardItem album = {album} />
//       </Grid>
//       ))}
