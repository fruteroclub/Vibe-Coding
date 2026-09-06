// IMPORTANTE: i18n config DEBE importarse ANTES de React
import './i18n/config';

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
