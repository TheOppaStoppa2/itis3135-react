import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Contract from "./pages/Contract";
import "./styles/main.css";


function Navigation() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/introduction" style={{ marginRight: "10px" }}>Introduction</Link>
      <Link to="/contract">Contract</Link>
    </nav>
  );
}

function Root() {
  return (
    <div>
      <Navigation />
      <Outlet />  {/* This will render the nested page components */}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="contract" element={<Contract />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
