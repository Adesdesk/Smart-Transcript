import React from 'react'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Tokenize,
  About,
  Contact,
  Blacklist,
  Verify,
  HowTo,
} from "./components";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tokenize" element={<Tokenize />} />
          <Route path="/about" element={<About />} />
          <Route path="/the-developer" element={<Contact />} />
          <Route path="/blacklist" element={<Blacklist />} />
          <Route path="/how-to" element={<HowTo />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
        <Footer />
      </Router>,
    </StrictMode>
);

serviceWorker.unregister();