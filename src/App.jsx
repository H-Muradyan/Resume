import React from "react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Weather from "./pages/Weather";



const App = () => {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/weather" element={<Weather />}></Route>
      </Routes>
    </Layout>
  );
};

export default App;
