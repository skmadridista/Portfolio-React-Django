import React, { useEffect, useState } from "react";
import { Card, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../static/css/cards.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/projects/")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="container">
      <h2>Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-4" key={project.id}>
            <Link
              to={project.repo_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Card>
                <Card.Body>
                  <Card.Title>{project.project_name}</Card.Title>
                  <CardImg src={project.owner_avatar_url} />
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
