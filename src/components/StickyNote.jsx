import React from 'react';

const StickyNote = ({ children, color = 'yellow', rotate = -2, className = '' }) => {
    const getBgColor = () => {
        switch (color) {
            case 'pink': return 'var(--sticky-pink)';
            case 'cyan': return 'var(--sticky-cyan)';
            case 'green': return 'var(--sticky-green)';
            default: return 'var(--sticky-yellow)';
        }
    };

    return (
        <div
            className={`sticky-note ${className}`}
            style={{
                backgroundColor: getBgColor(),
                padding: '1.5rem',
                boxShadow: '2px 4px 6px rgba(0,0,0,0.1)',
                transform: `rotate(${rotate}deg)`,
                transition: 'transform 0.3s ease',
                position: 'relative',
                color: 'var(--ink-color)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = `rotate(${rotate}deg) scale(1.05)`}
            onMouseLeave={(e) => e.currentTarget.style.transform = `rotate(${rotate}deg)`}
        >
            {/* Tape effect */}
            <div style={{
                position: 'absolute',
                top: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '40px',
                height: '20px',
                backgroundColor: 'rgba(255,255,255,0.4)',
                boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
            }} />

            {children}
        </div>
    );
};

export default StickyNote;
