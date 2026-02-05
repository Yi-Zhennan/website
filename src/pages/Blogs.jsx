import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../data/blogs.json';

const Blogs = () => {
    return (
        <div className="blogs-archive">
            <div style={{ marginBottom: '2rem' }}>
                <Link to="/#blogs" style={{ color: 'var(--ink-color)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>&larr;</span> Back Home
                </Link>
            </div>

            <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3.5rem', transform: 'rotate(1deg)' }}>Blogs</h1>
            </header>

            <div style={{ display: 'grid', gap: '3rem' }}>
                {blogData.map(post => (
                    <article key={post.id} style={{ borderBottom: '1px solid rgba(44, 62, 80, 0.1)', paddingBottom: '2rem' }}>
                        <span style={{ fontFamily: 'var(--font-body)', color: '#888' }}>{post.date}</span>
                        <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h2 style={{ fontFamily: 'var(--font-hand-bold)', margin: '0.5rem 0' }}>{post.title}</h2>
                        </Link>
                        <p style={{ fontFamily: 'var(--font-body)', color: '#444', maxWidth: '800px' }}>{post.excerpt}</p>
                        <Link to={`/blog/${post.id}`} style={{ color: 'var(--accent-color)', fontWeight: 'bold', textDecoration: 'none' }}>Read more &rarr;</Link>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
