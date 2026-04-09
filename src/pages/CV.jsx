import React from 'react';
import { Link } from 'react-router-dom';
import cvPdf from '../data/cv/cv.pdf';

const CV = () => {
    return (
        <div className="cv-page" style={{ position: 'relative', paddingTop: '1rem' }}>
            <div style={{
                position: 'absolute',
                left: 0,
                top: '1rem',
                fontSize: '1.2rem',
                zIndex: 10
            }}>
                <Link to="/" style={{ color: 'var(--ink-color)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>&larr;</span> Back Home
                </Link>
            </div>

            <div style={{
                width: '55%',
                maxWidth: '900px',
                margin: '0 auto',
                height: '80vh',
                minHeight: '800px',
                border: '3px solid var(--ink-color)',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: 'white',
                boxShadow: '15px 15px 0px rgba(0,0,0,0.05)',
                position: 'relative',
                marginBottom: '4rem',
                marginTop: '1rem'
            }}>
                <iframe
                    src={`${cvPdf}#toolbar=0&navpanes=0&view=FitH`}
                    width="100%"
                    height="100%"
                    style={{
                        border: 'none',
                        position: 'absolute',
                        top: '-10px',
                        left: 0,
                        width: '100%',
                        height: 'calc(100% + 108px)'
                    }}
                    title="Zhennan Yi - CV"
                />
            </div>
        </div>
    );
};

export default CV;
