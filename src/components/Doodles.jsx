import React from 'react';

export const Arrow = ({ className, style }) => (
    <svg
        width="50"
        height="50"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        style={style}
    >
        <path d="M10,90 Q50,10 90,50" />
        <path d="M80,40 L90,50 L70,60" />
    </svg>
);

export const Star = ({ className }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
);

export const CircleHighlight = ({ className }) => (
    <svg width="100%" height="100%" viewBox="0 0 200 60" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }} className={className}>
        <path d="M10,30 Q50,5 190,30 T 10,30" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeDasharray="5,5" />
    </svg>
)

// Social Icons - Hand Drawn Style
export const EmailDoodle = ({ className, size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6l-10 7L2 6" />
    </svg>
);

export const LinkedInDoodle = ({ className, size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

export const GoogleScholarDoodle = ({ className, size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 0 2 3 6 3s6-3 6-3v-5" />
    </svg>
);

export const XDoodle = ({ className, size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

export const AudioDoodle = ({ className, size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
);

export const UnderlineDoodle = ({ className, style }) => (
    <svg width="100%" height="20" viewBox="0 0 200 20" preserveAspectRatio="none" style={style} className={className}>
        <path d="M5,15 Q50,5 100,15 T195,15" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
);

export const ConnectorDoodle = ({ className, style }) => (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style} className={className}>
        <path d="M10,10 Q30,50 50,50" />
        <path d="M40,45 L50,50 L45,55" />
    </svg>
);

export const ClimbingDoodle = ({ className, size = 24, style }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        {/* Mountain ridge - sketchy overlapping lines */}
        <path d="M2 20 Q7 15 12 4 Q17 15 22 20" opacity="0.8" />
        <path d="M3 19 Q8 14 13 5 Q18 14 21 19" />
        {/* Snow cap/detail lines */}
        <path d="M9 10 Q12 12 15 10" />
        <path d="M10 11 Q12 13 14 11" opacity="0.6" />
        {/* Little flag at top - makes it recognizable */}
        <path d="M12 4 L14 5 L12 6" fill="currentColor" opacity="0.3" />
    </svg>
);

export const DanceDoodle = ({ className, size = 24, style }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        {/* Fluid, sketchy figure */}
        <circle cx="12" cy="5" r="2.5" /> {/* Head */}
        {/* Body & Arms - sweeping strokes */}
        <path d="M12 7.5 Q10 12 8 18" />
        <path d="M12 8 Q14 12 16 18" />
        <path d="M12 10 Q6 8 4 12" /> {/* Arm left */}
        <path d="M12 10 Q18 6 20 8" /> {/* Arm right */}
        {/* Skirt/Movement lines */}
        <path d="M9 14 Q12 16 15 14" opacity="0.7" />
        <path d="M8 15 Q12 17 16 15" opacity="0.4" />
    </svg>
);

export const CrochetDoodle = ({ className, size = 24, style }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        {/* Sketchy yarn ball */}
        <path d="M12 21 C17 21 21 17 21 12 C21 7 17 3 12 3 C7 3 3 7 3 12 C3 17 7 21 12 21" />
        <path d="M12 4 C15 7 15 17 12 20" opacity="0.6" />
        <path d="M4 12 C7 15 17 15 20 12" opacity="0.6" />
        <path d="M11 21 Q9 15 14 12 Q19 9 17 4" opacity="0.4" strokeDasharray="2 2" />
        {/* Crochet book/hook */}
        <path d="M19 5 L5 19" strokeWidth="2" />
        <path d="M5 19 Q4 20 5 21" /> {/* Hook tip */}
    </svg>
);

export const CVDoodle = ({ className, size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        {/* Outline of a document */}
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        {/* "CV" letters in a sketchy way */}
        <path d="M11 13a2.5 2.5 0 0 0-3 2v0a2.5 2.5 0 0 0 3 2" opacity="0.8" />
        <path d="M14 13l2 4 2-4" opacity="0.8" />
    </svg>
);


