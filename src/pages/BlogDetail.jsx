import React from 'react';
import { useParams, Link } from 'react-router-dom';
import StickyNote from '../components/StickyNote';
import blogData from '../data/blogs.json';

const BlogDetail = () => {
    const { id } = useParams();

    // Find the post by ID
    const post = blogData.find(p => p.id === parseInt(id)) || {
        title: "Post Not Found",
        date: "",
        sections: [{ type: "text", value: "Sorry, this blog post does not exist." }],
        takeaway: "Check back later!"
    };

    return (
        <div className="blog-detail-page">
            <div style={{ marginBottom: '2rem', fontSize: '1.3rem' }}>
                <Link to="/blogs" style={{ textDecoration: 'none', color: 'var(--ink-color)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>&larr;</span> Back to ALl Blogs
                </Link>
            </div>

            <header style={{ marginBottom: '4rem' }}>
                <span style={{ fontFamily: 'var(--font-body)', color: '#888' }}>{post.date}</span>
                <h1 style={{ fontSize: '2rem', marginTop: '0.5rem', transform: 'rotate(-0.5deg)' }}>{post.title}</h1>
            </header>

            <div className="main-content-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 280px', gap: '4rem' }}>
                <article style={{ fontFamily: 'var(--font-body)', lineHeight: 1.8, fontSize: '1.2rem' }}>

                    {post.sections.map((section, index) => {
                        const renderSection = (sec, idx) => {
                            if (sec.type === 'text') {
                                return (
                                    <p key={idx} style={{
                                        whiteSpace: 'pre-wrap',
                                        marginBottom: '1.5rem',
                                        fontSize: sec.fontSize || 'inherit',
                                        columnCount: sec.columns || 1,
                                        columnGap: '2rem',
                                        hyphens: 'auto'
                                    }}>
                                        {sec.value}
                                    </p>
                                );
                            }

                            if (sec.type === 'image') {
                                const imageContent = (
                                    <img
                                        src={sec.url}
                                        alt={sec.caption || post.title}
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentNode.style.display = 'none';
                                        }}
                                    />
                                );

                                return (
                                    <div key={idx} style={{
                                        marginBottom: '2rem',
                                        padding: '1rem',
                                        backgroundColor: 'white',
                                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                        border: '1px solid #eee',
                                        width: sec.width || '100%',
                                        margin: sec.width ? '0 auto 2rem' : '0 0 2rem'
                                    }}>
                                        {sec.link ? (
                                            <a href={sec.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                                                {imageContent}
                                            </a>
                                        ) : (
                                            imageContent
                                        )}
                                        {sec.caption && (
                                            <div style={{ textAlign: 'center', fontFamily: 'var(--font-mukta-vaani)', marginTop: '0.5rem', opacity: 0.6 }}>
                                                {sec.caption}
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            if (sec.type === 'gallery') {
                                return (
                                    <div key={idx} style={{
                                        display: 'grid',
                                        gridTemplateColumns: `repeat(${sec.columns || sec.images.length}, 1fr)`,
                                        gap: '1rem',
                                        marginBottom: '2rem'
                                    }}>
                                        {sec.images.map((img, i) => {
                                            const imgElement = (
                                                <img
                                                    src={img.url}
                                                    alt={img.caption || post.title}
                                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                                />
                                            );

                                            return (
                                                <div key={i} style={{
                                                    padding: '0.5rem',
                                                    backgroundColor: 'white',
                                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                                    border: '1px solid #eee'
                                                }}>
                                                    {img.link ? (
                                                        <a href={img.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                                                            {imgElement}
                                                        </a>
                                                    ) : (
                                                        imgElement
                                                    )}
                                                    {img.caption && (
                                                        <div style={{ textAlign: 'center', fontFamily: 'var(--font-mukta-vaani)', marginTop: '0.3rem', fontSize: '0.8rem', opacity: 0.6 }}>
                                                            {img.caption}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                );
                            }

                            if (sec.type === 'split') {
                                return (
                                    <div key={idx} className="mobile-stack" style={{
                                        display: 'grid',
                                        gridTemplateColumns: sec.ratio || '1fr 1fr',
                                        gap: '2rem',
                                        alignItems: 'center',
                                        marginBottom: '2rem'
                                    }}>
                                        <div>{renderSection(sec.left, `${idx}-l`)}</div>
                                        <div>{renderSection(sec.right, `${idx}-r`)}</div>
                                    </div>
                                );
                            }

                            if (sec.type === 'video') {
                                return (
                                    <div key={idx} style={{
                                        marginBottom: '2rem',
                                        position: 'relative',
                                        paddingTop: '56.25%', // 16:9 Aspect Ratio 
                                        border: '3px solid var(--ink-color)',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        transform: `rotate(${idx % 2 === 0 ? 0.5 : -0.5}deg)`
                                    }}>
                                        <iframe
                                            src={sec.url}
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                                            title="Video content"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                );
                            }

                            return null;
                        };

                        return renderSection(section, index);
                    })}
                </article>

                <aside style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'sticky', top: '5rem', alignSelf: 'start' }}>
                    {/* <StickyNote color="pink" rotate={2}>
                        <h4>About the Author</h4>
                        <p>Zhennan Yi. PhD student at IUB. Loves paper and ink.</p>
                    </StickyNote> */}
                    <StickyNote color="yellow" rotate={-1}>
                        <h4>Quick Navigation</h4>
                        <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                            <li><Link to="/#blogs" style={{ color: 'inherit' }}>Home</Link></li>
                            <li><Link to="/blogs" style={{ color: 'inherit' }}>All Blogs</Link></li>
                            <li><Link to="/projects" style={{ color: 'inherit' }}>All Projects</Link></li>
                        </ul>
                    </StickyNote>
                </aside>
            </div>
        </div>
    );
};

export default BlogDetail;
