import React from "react";
import Header from "../frontend/home/Header";
import Footer from "../frontend/home/Footer";
import AboutUs from "../frontend/about/AboutUs";

const AboutPage = () => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "110px" }}>
      <AboutUs />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
