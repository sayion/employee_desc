import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Posts from "./Posts.jsx";
const imgUrl="https://img.freepik.com/premium-photo/lord-hanuman-angry-ilustration_862994-4747.jpg";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Posts   name="Bill Gates" position="Senior" role="Software Engineer expertise in frontend" link="Report of the month" />
    <Posts name="Mark Zukerberg " position="Senior" role="Chef in Most Executive Dine in the Industry" link="Report of the month"/>
    <Posts  name="Sayion Debnath" position="Senior" role="Software Engineer expertise in frontend" link="Report of the month" />
    <Posts  name="Sayion Debnath" position="Senior" role="Software Engineer expertise in frontend" link="Report of the month" />
    <Posts  name=" Jason Mamoa" position="Senior" role="Software Engineer expertise in frontend" link="Report of the month"/>
  </React.StrictMode>
);
