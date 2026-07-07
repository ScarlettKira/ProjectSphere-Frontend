import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

import uiKit from "../assets/ui-kit.png";
import eco from "../assets/eco.png";
import drone from "../assets/drone.png";

const projects = [
  {
    title: "Nebula UI Kit",
    category: "UI/UX",
    year: "Senior Year",
    description:
      "A comprehensive design system focusing on spatial interfaces and glassmorphism...",
    author: "Alex Santos",
    initials: "AS",
    image: uiKit,
    badgeClass: "purple",
  },
  {
    title: "Eco-Predictor",
    category: "Data Science",
    year: "",
    description:
      "Machine learning models predicting local climate anomalies using open-source...",
    author: "Mia Chen",
    initials: "MC",
    image: eco,
    badgeClass: "blue",
  },
  {
    title: "Aero-Drone V2",
    category: "Engineering",
    year: "",
    description:
      "A lightweight, energy-efficient drone chassis designed for rapid urban environments...",
    author: "James Doe",
    initials: "JD",
    image: drone,
    badgeClass: "pink",
  },
];

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="trending container">
        <div className="section-header">
          <h2>Trending Innovations</h2>

          <a href="#" className="view-all">
            View All →
          </a>
        </div>

        <div className="cards">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <CTA />

      <Footer />
    </>
  );
}

export default Home;