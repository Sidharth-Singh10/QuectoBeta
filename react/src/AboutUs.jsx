import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import "./index.css";
import Title from "./components/title/Title";
import Form from "./components/Form/Form";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Title />
    <Form />
  </React.StrictMode>
);
