import React, { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/shared/Loading";
import { Route, Routes } from "react-router";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const Contact = lazy(() => import("./pages/Contact"));
const Weather = lazy(() => import("./pages/Weather"));
const Repositories = lazy(() => import("./pages/Repositories"));

const App = () => {
  return (
    <Layout>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        ></Route>
        <Route
          path="/projects"
          element={
            <Suspense fallback={<Loading />}>
              <Projects />
            </Suspense>
          }
        ></Route>
        <Route
          path="/skills"
          element={
            <Suspense fallback={<Loading />}>
              <Skills />
            </Suspense>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          }
        ></Route>
        <Route
          path="/weather"
          element={
            <Suspense fallback={<Loading />}>
              <Weather />
            </Suspense>
          }
        ></Route>
        <Route
          path="/repositories"
          element={
            <Suspense fallback={<Loading />}>
              <Repositories />
            </Suspense>
          }
        ></Route>
      </Routes>
    </Layout>
  );
};

export default App;
