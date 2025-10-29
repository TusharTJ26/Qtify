import sampleImage from "../assets/sample.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import "../App.css";
const Footer = () => {
  return (
    <div
      className="elePadding"
      style={{
        display: "flex",
        borderTop: "solid white 2px",
        paddingTop: "2rem",
      }}
    >
      <div>
        <Card sx={{ height: "5.2rem", background: "none", width: "11.1rem" }}>
          <CardActionArea sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              // height="140"

              // image={sampleImage}
              image={sampleImage}
              alt="title"
              sx={{
                height: "5.2rem",
                width: "4.75rem",
                borderRadius: "0.625rem",
              }}
            />
            <CardContent sx={{ margin: "0", padding: "0.55rem" }}>
              <Typography
                gutterBottom
                variant="body2"
                sx={{ margin: "0", letterSpacing: "0" }}
              >
                {/* 100 Follows */}
                {/* {album.follows} */}
                Song name
              </Typography>
              {/* </CardContent>
          <CardContent> */}
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontSize: "12px",
                  margin: "0",
                  letterSpacing: "0",
                }}
              >
                {/* New Bollywood */}
                {/* {album.title} */}
                Album name
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div
        style={{
          alignItems: "center",
          marginLeft: "15%",
          marginRight: "auto",
        }}
      >
        <div>
          <PauseCircleFilledIcon
            sx={{
              fontSize: "3rem",
              color: "white",
            }}
          />
        </div>
        <div>
          <Box sx={{ width: "42.25rem" }}>
            <Stack
              spacing={2}
              direction="row"
              sx={{ alignItems: "center", mb: 1 }}
            >
              {/* <VolumeDown /> */}
              <Typography>0:38</Typography>

              <Slider
                aria-label="Volume"
                value="17.5"
                //   onChange={handleChange}
                sx={{ margin: "0 1rem" }}
              />
              {/* <VolumeUp /> */}
              <Typography>3:38</Typography>
            </Stack>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Footer;
