/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Default Import

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { useState } from "react";
import { Toaster } from "react-hot-toast";

// Layout

// import Layout from "@/layouts/root-layout";

// Utility Pages / Components

import ScrollToTop from "./utility/ScrollToTop";
import CustomCursor from "./utility/CustomCursor";
import ScrollToTopFunction from "./utility/ScrollToTopFunction";
import NotFoundPage from "./pages/Utility/NotFound404";
import LoadingScreen from "./pages/Utility/LoadingScreen";

// Authentication Pages

import LoginPage from "@/pages/Auth/login";
import RegisterPage from "@/pages/Auth/register";
import ForgotPasswordPage from "@/pages/Auth/forgot-password";

// Pages

import LandingPage from "@/pages/Landing/page2";

import MapPage from "./pages/Map/page";
// @ts-ignore
import DemoPage from "./pages/Demo/page";

// User Dashboard

import Dashboard from "./pages/Dashboard/overview";
import MapGamePage from "./pages/MapGame/page";

function App() {

  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <ScrollToTopFunction />
      <ScrollToTop />
      <CustomCursor />

      {loading && (
        <LoadingScreen onComplete={() => setLoading(false)} />
      )}

      <AnimatePresence mode="wait">

        {!loading && (

          <Routes>

              
            {/* <Route path="/" element={<Layout children={<LandingPage/>}/>} /> */}
            <Route path="/" element={<LandingPage/>} />

            <Route path="*" element={<NotFoundPage/>} />

            <Route path="/map" element={<MapPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/map-game" element={<MapGamePage />} />

            {/* Authentication Pages */}

            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />

            {/* Dashboard Pages */}

            <Route path="/dashboard" element={<Dashboard />} />

          </Routes>

        )}

      </AnimatePresence>

      <Toaster position="top-center" />

    </BrowserRouter>

  );
}

export default App;
