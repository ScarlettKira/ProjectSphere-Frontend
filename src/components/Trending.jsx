const data = [
  {
    title: "Nebula UI Kit",
    desc: "A futuristic design system for apps.",
  },
  {
    title: "Eco-Predictor",
    desc: "AI model predicting climate patterns.",
  },
  {
    title: "Aero-Drone V2",
    desc: "Smart drone for mapping and delivery.",
  },
];

export default function Trending() {
  return (
    <section className="trending">
      <div className="section-header">
        <h2>Trending Innovations</h2>
        <a href="#">View all →</a>
      </div>

      <div className="cards">
        {data.map((item, i) => (
          <div className="card" key={i}>
            <div className="card-img" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}