import "./App.css";
import styled from "styled-components";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Home from "./components/home/home.jsx";
import Merkevare from "./components/merkevare/merkevare.jsx";
import Logo from "./components/logo/logo.jsx";
import Colors from "./components/farger/farger.jsx";
import Typography from "./components/typografi/typografi.jsx";

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

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-grow: 1;

  @media (max-width: 768px) {
    display: block;
  }
`;

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <PageWrapper>
          <Sidebar />
          <ContentWrapper>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/merkevare" element={<Merkevare />} />
              <Route path="/logo" element={<Logo />} />
              <Route path="/farger" element={<Colors />} />
              <Route path="/typografi" element={<Typography />} />
            </Routes>
          </ContentWrapper>
        </PageWrapper>
        <Footer />
      </AppWrapper>
    </Router>
  );
};

export default App;
