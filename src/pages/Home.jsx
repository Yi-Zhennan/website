import React from 'react';
import HandDrawnCard from '../components/HandDrawnCard';
import StickyNote from '../components/StickyNote';
import { Arrow, Star, EmailDoodle, LinkedInDoodle, GoogleScholarDoodle, XDoodle, AudioDoodle, UnderlineDoodle, ConnectorDoodle, ClimbingDoodle, DanceDoodle, CrochetDoodle } from '../components/Doodles';
import { Link } from 'react-router-dom';
import blogData from '../data/blogs.json';
import projectData from '../data/projects.json';

const Home = () => {
    const audioRef = React.useRef(null);
    const [showTooltip, setShowTooltip] = React.useState(false);

    // Get the 3 most recent posts
    const recentPosts = blogData.slice(0, 3);

    // Get the 3 most recent projects for the home page
    const featuredProjects = projectData.slice(0, 3);

    const playAudio = (e) => {
        e.stopPropagation();
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="mobile-stack" style={{
                display: 'grid',
                gridTemplateColumns: '1.9fr 1fr',
                gap: '4rem',
                marginBottom: '5rem',
                marginTop: '2rem',
                alignItems: 'center'
            }}>
                <div style={{ position: 'relative' }}>
                    <h2
                        style={{
                            fontSize: '2.8rem',
                            marginBottom: '1rem',
                            position: 'relative',
                            display: 'inline-block',
                            cursor: 'help'
                        }}
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                    >
                        Yi, <span style={{ color: 'var(--accent-color)', position: 'relative' }}>
                            Zhennan
                            {showTooltip && (
                                <UnderlineDoodle
                                    style={{
                                        position: 'absolute',
                                        bottom: '-12px',
                                        left: 0,
                                        color: 'var(--accent-color)',
                                        animation: 'draw 0.3s ease-out forwards'
                                    }}
                                />
                            )}
                            {!showTooltip && (
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-28px',
                                    right: '-50px',
                                    fontFamily: 'var(--font-hand)',
                                    fontSize: '0.8rem',
                                    color: 'var(--ink-color)',
                                    opacity: 0.5,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    whiteSpace: 'nowrap',
                                    cursor: 'help'
                                }}>
                                    <Arrow style={{ width: '15px', height: '15px', transform: 'rotate(-110deg)' }} />
                                    <span>How to pronounce?</span>
                                </div>
                            )}
                        </span>|易振南

                        {/* Pronunciation Tooltip */}
                        <div className="pronunciation-tooltip" style={{
                            position: 'absolute',
                            top: '110%',
                            left: '60%',
                            zIndex: 100,
                            width: '320px',
                            opacity: showTooltip ? 1 : 0,
                            transform: showTooltip ? 'translateY(0) rotate(2deg)' : 'translateY(10px) rotate(0deg)',
                            pointerEvents: showTooltip ? 'auto' : 'none',
                            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}>
                            {showTooltip && (
                                <>
                                    <ConnectorDoodle
                                        className="mobile-hide"
                                        style={{
                                            position: 'absolute',
                                            top: '-45px',
                                            left: '10px',
                                            transform: 'rotate(-20deg)',
                                            color: 'var(--ink-color)',
                                            opacity: 0.6
                                        }}
                                    />
                                    <StickyNote color="pink" rotate={0}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                                <span style={{ fontFamily: 'var(--font-hand-bold)', fontSize: '1rem' }}>How to pronounce?</span>
                                                <button
                                                    onClick={playAudio}
                                                    style={{
                                                        background: 'var(--ink-color)',
                                                        border: 'none',
                                                        borderRadius: '50%',
                                                        width: '32px',
                                                        height: '32px',
                                                        cursor: 'pointer',
                                                        color: 'white',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        transition: 'transform 0.1s'
                                                    }}
                                                    onMouseDown={e => e.currentTarget.style.transform = 'scale(0.9)'}
                                                    onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
                                                    aria-label="Play pronunciation"
                                                >
                                                    <AudioDoodle size={18} />
                                                </button>
                                            </div>

                                            <div style={{ fontFamily: 'var(--font-hand)', fontSize: '0.9rem', lineHeight: '1.4' }}>
                                                <p style={{ margin: 0 }}><strong>Family:</strong> 易 (yì) — like "easy"</p>
                                                <p style={{ margin: '0.2rem 0' }}><strong>Given:</strong> 振南 (zhèn nán)</p>
                                                <p style={{ margin: 0, opacity: 0.8, fontStyle: 'italic' }}>Or just call me <strong>Jane-Nan</strong>!</p>
                                            </div>
                                            <audio ref={audioRef} src="/zhennan.mp3" />
                                        </div>
                                    </StickyNote>
                                </>
                            )}
                        </div>
                    </h2>
                    <p style={{ fontSize: '1.35rem', lineHeight: 1.8 }}>
                        Informatics PhD student @IUB <br />
                        B.S. in Psychology @BNU<br />
                        I enjoy route climbing, choreography and crochet.<br />
                        <strong style={{ fontWeight: 600 }}>I design and develop social robots situated within children’s existing social relationships.</strong><br />
                    </p>
                </div>

                <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                    {/* Placeholder for Profile Picture */}
                    <div style={{
                        width: '300px',
                        height: '240px',
                        borderRadius: '2% 5% 4% 3% / 3% 4% 5% 2%', // Wobbly rectangle
                        border: '3px solid var(--ink-color)',
                        backgroundColor: '#ddd',
                        backgroundImage: 'url("/profile.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        boxShadow: '10px 10px 0px rgba(0,0,0,0.1)',
                        transform: 'rotate(-1deg)'
                    }}></div>
                </div>
            </section >

            <section id="about" style={{ marginBottom: '6rem' }}>
                <div className="mobile-grid-1" style={{
                    display: 'grid',
                    gap: '2rem',
                    // On larger screens, give research more width
                    gridTemplateColumns: 'minmax(300px, 1.3fr) minmax(280px, 1.1fr) minmax(200px, 0.6fr)'
                }}>
                    <div style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                        <h3>Research</h3>
                        <p>Situated at the intersection of artificial intelligence, robotics, and psychology, my research investigates
                            the design of social robots for children in educational and family contexts, focusing on how robot
                            interactions support social emotional development, creativity, and shared meaning-making.
                            I adopt research-through-design and participatory approaches, creating and studying interactive artifacts to
                            explore how robots can be meaningfully integrated into everyday social settings and made accessible to children
                            and those involved in child development.</p>
                        <p><strong>Keywords</strong>: Child-Robot Interaction, Group HRI, Social Emotional Development, Research-through-Design, Participatory Design</p>
                    </div>

                    <StickyNote color="yellow" rotate={0}>
                        <h3>News</h3>
                        <ul style={{ paddingLeft: '1.2rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                            <li><strong>[2025-12-02]</strong> One paper has been accepted to HRI.</li>
                            <li> <strong>[2025-06-08]</strong> My first paper in HRI area has been accepted to RO-MAN. </li>
                            <li><strong>[2024-04-26]</strong> Our paper won the Best Paper Award at CHI'24. </li>
                        </ul>
                    </StickyNote>

                    <div style={{ textAlign: 'center', padding: '1rem' }}>
                        <h3 style={{ transform: 'rotate(-2deg)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            <Star /> Contact <Star />
                        </h3>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                            <a href="mailto:yizh@iu.edu" style={{ color: 'var(--ink-color)', transition: 'transform 0.2s', display: 'inline-block' }} aria-label="Email">
                                <EmailDoodle size={40} />
                            </a>
                            <a href="https://www.linkedin.com/in/zhennan-yi" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink-color)', transition: 'transform 0.2s', display: 'inline-block' }} aria-label="LinkedIn">
                                <LinkedInDoodle size={40} />
                            </a>
                            <a href="https://scholar.google.com/citations?user=RE3GEEsAAAAJ&hl" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink-color)', transition: 'transform 0.2s', display: 'inline-block' }} aria-label="Google Scholar">
                                <GoogleScholarDoodle size={40} />
                            </a>
                            <a href="https://x.com/nan08879" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink-color)', transition: 'transform 0.2s', display: 'inline-block' }} aria-label="X (Twitter)">
                                <XDoodle size={40} />
                            </a>
                        </div>
                        <p style={{ marginTop: '1rem', fontFamily: 'var(--font-hand)', fontSize: '1.1rem' }}>Let's stay in touch!</p>
                    </div>
                </div>
            </section >

            {/* Projects Section */}
            < section id="projects" style={{ marginBottom: '6rem' }
            }>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <h2 style={{ margin: 0, transform: 'rotate(-1.5deg)' }}>Recent Projects</h2>
                    <div style={{ flex: 1, height: '2px', borderBottom: '2px dashed var(--ink-color)', opacity: 0.3 }}></div>
                </div>
                {/* <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ borderBottom: '3px solid var(--ink-color)', paddingBottom: '0.5rem', transform: 'rotate(-1deg)' }}>Projects</h2>
                </div> */}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                    {featuredProjects.map((project, index) => (
                        <HandDrawnCard key={project.id} title={project.title} rotate={index % 2 === 0 ? 1 : -1}>
                            <div style={{ width: '100%', height: '180px', backgroundColor: '#eee', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc', overflow: 'hidden' }}>
                                {project.thumbnail ? (
                                    <img src={project.thumbnail} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>Image Placeholder</div>
                                )}
                            </div>
                            <p>
                                {project.description}
                            </p>
                            <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                                <Link to={`/case-study/${project.id}`} style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>View Details &rarr;</Link>
                            </div>
                        </HandDrawnCard>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <Link to="/projects" style={{ fontFamily: 'var(--font-hand)', fontSize: '1.2rem', color: 'var(--ink-color)' }}>See all projects &rarr;</Link>
                </div>
            </section >

            {/* Blogs Section */}
            < section id="blogs" style={{ marginBottom: '6rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <h2 style={{ margin: 0, transform: 'rotate(-1.5deg)' }}>Recent Blogs</h2>
                    <div style={{ flex: 1, height: '2px', borderBottom: '2px dashed var(--ink-color)', opacity: 0.3 }}></div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {recentPosts.map(post => (
                        <div key={post.id} style={{
                            border: '1px solid rgba(44, 62, 80, 0.1)',
                            padding: '1.5rem',
                            borderRadius: '8px',
                            backgroundColor: 'white',
                            transition: 'transform 0.2s',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <span style={{ fontSize: '0.9rem', color: '#888', fontFamily: 'var(--font-body)' }}>{post.date}</span>
                                <h3 style={{ margin: '0.5rem 0 0 0', fontFamily: 'var(--font-hand-bold)' }}>{post.title}</h3>
                                <div style={{ marginTop: '1rem', color: 'var(--accent-color)', fontSize: '0.9rem' }}>Read more &rarr;</div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Link to="/blogs" style={{ fontFamily: 'var(--font-hand)', fontSize: '1.2rem', color: 'var(--ink-color)' }}>See all posts &rarr;</Link>
                </div>
            </section >
        </>
    );
};

export default Home;
