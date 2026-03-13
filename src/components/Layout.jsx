import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import VisitorCounter from './VisitorCounter';

const Layout = () => {
    const location = useLocation();

    // Handle scroll on location change
    React.useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        if (location.hash) {
            const elem = document.getElementById(location.hash.substring(1));
            if (elem) {
                elem.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    const navLinks = [
        { name: 'About', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'CV', path: 'https://drive.google.com/file/d/1ZAuOBJr9k9DRK2QxqV-7jWPGZ-1peZSo/view?usp=sharing', external: true }
    ];

    return (
        <div className="layout-container">
            {/* Navbar / Header */}
            <nav className="nav-container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '4rem',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                backgroundColor: 'rgba(255, 255, 255, 0.85)', // var(--paper-bg) with opacity
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                padding: '1rem 2rem',
                borderBottom: '1px dashed rgba(44, 62, 80, 0.2)', // faint ink
                transition: 'all 0.3s ease',
                margin: '0 -2rem'
            }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h1 className="nav-brand" style={{ fontSize: '2rem', margin: 0 }}>Yi, Zhennan</h1>
                </Link>
                <div className="nav-links" style={{ display: 'flex', gap: '1.5rem' }}>
                    {navLinks.map((item, i) => {
                        const linkStyle = {
                            textDecoration: 'none',
                            color: 'var(--ink-color)',
                            fontSize: '1.2rem',
                            borderBottom: 'none'
                        };

                        if (item.external) {
                            return (
                                <a key={item.name} href={item.path} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                    {item.name}
                                </a>
                            );
                        }

                        return (
                            <Link key={item.name} to={item.path} style={linkStyle}>
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            <main className="page-content">
                <Outlet />
            </main>

            <footer style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--ink-color)', fontFamily: 'var(--font-mukta-vaani)', fontSize: '1.1rem' }}>
                <div style={{ borderTop: '1px solid rgba(44, 62, 80, 0.1)', paddingTop: '2rem' }}>
                    &copy; {new Date().getFullYear()} Zhennan Yi. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Layout;
