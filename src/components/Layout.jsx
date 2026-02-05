import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();

    // Handle scroll on location change
    React.useEffect(() => {
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
        { name: 'Blogs', path: '/blogs' }
    ];

    return (
        <div className="layout-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0.5rem 2rem 2rem 2rem' }}>
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
                    <h1 style={{ fontSize: '2rem', margin: 0 }}>Yi, Zhennan</h1>
                </Link>
                <div className="nav-links" style={{ display: 'flex', gap: '1.5rem' }}>
                    {navLinks.map((item, i) => {
                        return (
                            <Link key={item.name} to={item.path} style={{
                                textDecoration: 'none',
                                color: 'var(--ink-color)',
                                fontSize: '1.2rem',
                                borderBottom: 'none'
                            }}>
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            <Outlet />

            <footer style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--ink-color)', fontFamily: 'var(--font-hand)', fontSize: '1.1rem' }}>
                <div style={{ borderTop: '1px solid rgba(44, 62, 80, 0.1)', paddingTop: '2rem' }}>
                    &copy; {new Date().getFullYear()} Zhennan Yi. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Layout;
