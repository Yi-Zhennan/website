import React from 'react';
import { useParams, Link } from 'react-router-dom';
import StickyNote from '../components/StickyNote';
import { Arrow } from '../components/Doodles';
import projectData from '../data/projects.json';

const CaseStudy = () => {
    const { id } = useParams();

    // Find the project by ID
    const project = projectData.find(p => p.id === parseInt(id)) || {
        title: "Project Not Found",
        keywords: "N/A",
        role: "N/A",
        timeline: "N/A",
        sections: [{ type: "text", value: "Sorry, this project case study does not exist." }]
    };

    return (
        <div className="case-study-page">
            <div style={{ marginBottom: '2rem', fontSize: '1.3rem' }}>
                <Link to="/projects" style={{ textDecoration: 'none', color: 'var(--ink-color)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>&larr;</span> Back to All Projects
                </Link>
            </div>

            <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '1.6rem' }}>{project.title}</h1>
                <p style={{ fontSize: '1.2rem', color: '#666', fontStyle: 'italic' }}>{project.keywords}</p>
            </header>

            <div className="main-content-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 280px', gap: '4rem', alignItems: 'start' }}>

                {/* Main Content Area */}
                <article style={{ fontFamily: 'var(--font-body)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                    {project.sections.map((section, index) => {
                        if (section.type === 'text') {
                            return <p key={index} style={{ marginBottom: '1.5rem', whiteSpace: 'pre-wrap' }}>{section.value}</p>;
                        }

                        if (section.type === 'image') {
                            return (
                                <div key={index} className="mobile-card-padding" style={{
                                    backgroundColor: 'white',
                                    padding: '1rem 1rem 3rem 1rem',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                                    transform: `rotate(${index % 2 === 0 ? 1 : -1}deg)`,
                                    marginBottom: '3rem',
                                    border: '1px solid #eee'
                                }}>
                                    <img
                                        src={section.url}
                                        alt={section.caption || project.title}
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentNode.style.display = 'none';
                                        }}
                                    />
                                    {section.caption && (
                                        <div style={{ textAlign: 'center', marginTop: '1rem', fontFamily: 'var(--font-hand)', fontSize: '1.5rem', color: 'var(--ink-color)' }}>
                                            {section.caption}
                                        </div>
                                    )}
                                </div>
                            );
                        }

                        if (section.type === 'video') {
                            return (
                                <div key={index} style={{
                                    marginBottom: '3rem',
                                    position: 'relative',
                                    paddingTop: '56.25%', // 16:9 Aspect Ratio 
                                    border: '3px solid var(--ink-color)',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    transform: `rotate(${index % 2 === 0 ? 0.5 : -0.5}deg)`
                                }}>
                                    <iframe
                                        src={section.url}
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                                        title="Video content"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            );
                        }

                        return null;
                    })}
                </article>

                {/* Sidebar / Notes */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'sticky', top: '6rem' }}>
                    <StickyNote color="pink" rotate={-1}>
                        <h4>Quick Navigation</h4>
                        <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                            <li><Link to="/#projects" style={{ color: 'inherit' }}>Home</Link></li>
                            <li><Link to="/blogs" style={{ color: 'inherit' }}>All Blogs</Link></li>
                            <li><Link to="/projects" style={{ color: 'inherit' }}>All Projects</Link></li>
                        </ul>
                    </StickyNote>
                </div>

            </div>
        </div>
    );
};

export default CaseStudy;
