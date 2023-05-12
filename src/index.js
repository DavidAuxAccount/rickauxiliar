import React from 'react'
// import ReactDOM from 'react-dom'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import App from './App'


/* ReactDOM.render(
  <App />,
  document.getElementById('root')
)
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)