function ProjectCard({
  image,
  title,
  category,
  year,
  description,
  author,
  initials,
  badgeClass,
}) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />

      <div className="card-body">
        <div className="badges">
          <span className={`badge ${badgeClass}`}>{category}</span>

          {year && <span className="badge blue">{year}</span>}
        </div>

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="author">
          <div className="avatar">{initials}</div>

          <span>{author}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;