import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselImage from "./CarouselImage";
import Banner1 from "../../images/banner1.png";
import Banner2 from "../../images/banner2.png";
import { Box } from "@mui/system";
import VideoPlayer from "../../HomePage/VideoPlayer";

function MyCarousel() {
  var images = [
    {
      src: Banner1,
      alt: "This is Banner 1!",
    },
    {
      src: Banner2,
      alt: "This is Banner 2!",
    },
  ];

  return (
    <Box width="100%">
      <Carousel width="100%">
        {images.map((image, i) => (
          <CarouselImage key={i} image={image} />
        ))}
      </Carousel>
    </Box>
  );
}

export default MyCarousel;
