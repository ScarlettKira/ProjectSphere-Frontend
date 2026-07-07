import heroImage from "../assets/space-planet.png";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        {/* Left Content */}
        <div className="hero-left">
          <h1>
            Showcase Student Innovation.
            <br />
            Discover, Explore.
            <br />
            <span>Build The Future Together.</span>
          </h1>

          <p>
            Project Sphere is a platform for university students to showcase
            their innovative projects, collaborate with peers, and inspire the
            next generation of creators.
          </p>

          <button className="hero-btn">
            Explore Projects
            <span className="arrow">→</span>
          </button>
        </div>

        {/* Right Image */}
        <div className="hero-right">
          <img src={heroImage} alt="Planet Illustration" />
        </div>
      </div>
    </section>
  );
}

export default Hero;