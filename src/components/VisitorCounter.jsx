import React, { useEffect, useState } from 'react';


const VisitorCounter = () => {
    const [count, setCount] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Using countapi.xyz
        // Namespace: yi-zhennan-website
        // Key: visits
        const fetchCount = async () => {
            try {
                // First try to hit the API with 'hit' to increment
                // Check if we already visited in this session to avoid double counting on refresh (optional, simple version hits every time)
                const response = await fetch('https://api.countapi.xyz/hit/yi-zhennan.github.io/visits');

                if (!response.ok) {
                    throw new Error('API Error');
                }

                const data = await response.json();
                setCount(data.value);
            } catch (err) {
                console.error("Visitor counter failed:", err);
                try {
                    // Fallback: try to just get info if hit fails
                    const response = await fetch('https://api.countapi.xyz/info/yi-zhennan.github.io/visits');
                    if (!response.ok) throw new Error('Info API Error');
                    const data = await response.json();
                    setCount(data.value);
                } catch (fallbackErr) {
                    setError(true);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchCount();
    }, []);

    // if (error || loading) return null; // Don't hide completely


    return (
        <div style={{ marginTop: '0.5rem', opacity: 0.8, color: 'white' }}>
            <span style={{ fontSize: '1rem' }}>
                {loading ? 'Visitor: ...' : error ? 'Visitor: -' : `Visitor: ${count}`}
            </span>
        </div>
    );
};

export default VisitorCounter;
