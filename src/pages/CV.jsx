import React from 'react';
import { Link } from 'react-router-dom';
import cvPdf from '../data/cv/cv.pdf';
import './CV.css';

const CV = () => {
    return (
        <div className="cv-page">
            <div className="cv-layout-wrapper">
                <div className="back-home-container">
                    <Link to="/" style={{ color: 'var(--ink-color)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>&larr;</span> Back Home
                    </Link>
                </div>

                <div className="pdf-container">
                    <iframe
                        src={`${cvPdf}#toolbar=0&navpanes=0&view=FitH`}
                        width="100%"
                        height="100%"
                        className="pdf-iframe"
                        title="Zhennan Yi - CV"
                    />
                </div>
            </div>
        </div>
    );
};

export default CV;
