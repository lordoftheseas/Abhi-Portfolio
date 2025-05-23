import "./index.css";
import TopBar from "./components/TopBar/TopBar.jsx";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import HeroSection from "./components/HeroSection/HeroSection";
import ProjectsSection from "./components/Projects/ProjectsSection";
import AboutSection from "./components/AboutSection/AboutSection";
import EmailSection from "./components/EmailSection/EmailSection";
import Footer from "./components/Footer/Footer.jsx";
import { Toolbar } from "@mui/material";

// Main App component with the structure you want
const App = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <TopBar />
      {/* This hidden Toolbar takes exactly the same space as your AppBar */}
      <Toolbar sx={{ mb: 2 }} />{" "}
      {/* Add margin-bottom for extra spacing if needed */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Your sections */}
        <HeroSection />
        {/* <AchievementsSection /> */}
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
};

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
);
