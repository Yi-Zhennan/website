import React from 'react';

const HandDrawnCard = ({ children, className = '', title, rotate = 0 }) => {
    // Randomize border radius slightly for that hand-drawn feel if not provided
    // For now, hardcoded "wobbly" values
    const borderRadius = '255px 15px 225px 15px / 15px 225px 15px 255px';

    return (
        <div
            className={`hand-drawn-card ${className}`}
            style={{
                border: 'var(--border-rough)',
                borderRadius: borderRadius,
                padding: '1.5rem',
                backgroundColor: 'white',
                boxShadow: '2px 3px 5px rgba(0,0,0,0.1)',
                transform: `rotate(${rotate}deg)`,
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column' // Ensure contents stack
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = `rotate(${rotate}deg) scale(1.02) translateY(-5px)`;
                e.currentTarget.style.boxShadow = '5px 8px 15px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(${rotate}deg)`;
                e.currentTarget.style.boxShadow = '2px 3px 5px rgba(0,0,0,0.1)';
            }}
        >
            {title && <h3 style={{ marginBottom: '1rem', borderBottom: '2px dashed var(--ink-color)', paddingBottom: '0.5rem', display: 'inline-block' }}>{title}</h3>}
            {children}
        </div>
    );
};

export default HandDrawnCard;
