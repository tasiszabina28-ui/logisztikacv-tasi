import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* 2. TEDD BE IDE A KOMPONENST: */}
    <Analytics />
  </React.StrictMode>,
)

createRoot(document.getElementById("root")!).render(<App />);
