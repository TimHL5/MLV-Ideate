import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import How from "./components/How.jsx";
import Success from "./components/Success.jsx";
import Speakers from "./components/Speakers.jsx";
import Logos from "./components/Logos.jsx";
import Waitlist from "./components/Waitlist.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <How />
      <Success />
      <Logos />
      <Speakers />
      <Waitlist />
      <Footer />
    </div>
  );
}