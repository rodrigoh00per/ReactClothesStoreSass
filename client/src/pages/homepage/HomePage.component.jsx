import React from "react";
import "./homepage.styles.scss";
import HomePageContainer from "./HomePage.styles";
import Directory from "../../components/directory/directory.component";

const HomePage = () => (
  <HomePageContainer>
    <Directory></Directory>
  </HomePageContainer>
);

export default HomePage;
