import React from 'react';
import { Link } from 'react-router-dom';
import HandDrawnCard from '../components/HandDrawnCard';
import projectData from '../data/projects.json';

const Projects = () => {
    return (
        <div className="projects-archive">
            <div style={{ marginBottom: '2rem', fontSize: '1.3rem' }}>
                <Link to="/#projects" style={{ textDecoration: 'none', color: 'var(--ink-color)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>&larr;</span> Back Home
                </Link>
            </div>

            <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', transform: 'rotate(1deg)' }}>Projects</h1>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                {projectData.map((project, index) => (
                    <HandDrawnCard key={project.id} title={project.title} rotate={index % 2 === 0 ? 0.5 : -0.5}>
                        <div style={{ width: '100%', height: '180px', backgroundColor: '#eee', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc', overflow: 'hidden' }}>
                            {project.thumbnail ? (
                                <img src={project.thumbnail} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>Thumbnail Placeholder</div>
                            )}
                        </div>
                        <p>
                            {project.description}
                        </p>
                        <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                            <Link to={`/case-study/${project.id}`} style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Explore &rarr;</Link>
                        </div>
                    </HandDrawnCard>
                ))}
            </div>
        </div>
    );
};

export default Projects;
