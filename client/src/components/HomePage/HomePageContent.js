import * as React from "react";
import MyCarousel from "../UI/Carousel/Carousel";
import { Container } from "@mui/system";
import CategorySection from "../Category/CatrgorySection";
import BestSeller from "./BestSeller";
import VideoPlayer from "./VideoPlayer";

function HomePageContent() {
  return (
    <>
      <Container maxWidth="xxxl">
        <MyCarousel></MyCarousel>
        <CategorySection></CategorySection>
        <BestSeller></BestSeller>
        <VideoPlayer></VideoPlayer>
      </Container>
    </>
  );
}

export default HomePageContent;
