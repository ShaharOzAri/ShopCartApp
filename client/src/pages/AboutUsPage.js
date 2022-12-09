import React from "react";
import Map from "../components/Map/Map";
import LocationCard from "../components/Map/LocationCard";
import { Container } from "@mui/system";
import LocationSection from "../components/Map/LocationSection";
import AboutUsContent from "../components/Map/AboutUsContent";

export default function AboutUsPage() {
  return (
    <Container maxWidth="xxxl">
      <header
        style={{ textAlign: "center", fontSize: "200%", fontWeight: "bold" }}
      >
        About Us
      </header>
      <AboutUsContent />
      <LocationSection />
      <Map />
    </Container>
  );
}
