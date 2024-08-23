import "./App.css";
import styled from "styled-components";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Home from "./components/home/home.jsx";
import Logo from "./components/logo/logo.jsx";
import Colors from "./components/colors/colors.jsx";
import Typography from "./components/typography/typography.jsx";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Manrope", sans-serif;
  background-color: #f8f8f8;
`;

const ContentWrapper = styled.div`
  margin-left: 250px;
  padding: 1rem 23rem 1rem 2rem;
  flex-grow: 1;
`;

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <div style={{ display: "flex", flexGrow: 1 }}>
          <Sidebar />
          <ContentWrapper>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/logo" element={<Logo />} />
              <Route path="/colors" element={<Colors />} />
              <Route path="/typography" element={<Typography />} />
            </Routes>
          </ContentWrapper>
        </div>
        <Footer />
      </AppWrapper>
    </Router>
  );
};

export default App;
