import React, { useEffect, useState } from 'react';


const VisitorCounter = () => {
    const [count, setCount] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Using counterapi.dev
        const fetchCount = async () => {
            try {
                // First try to hit the API with 'up' to increment
                // Check if we already visited in this session to avoid double counting on refresh (optional, simple version hits every time)
                const response = await fetch('https://api.counterapi.dev/v1/yi-zhennan.github.io/visits/up');

                if (!response.ok) {
                    throw new Error('API Error');
                }

                const data = await response.json();
                setCount(data.count);
            } catch (err) {
                console.error("Visitor counter failed:", err);
                try {
                    // Fallback: try to just get info if hit fails (CounterAPI.dev uses same structure mostly, or just fail safely)
                    // For now, if up fails, we show fallback
                    setError(true);
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
        <div className="visitor-counter" style={{ marginTop: '0.5rem', opacity: 0.8, fontFamily: 'var(--font-hand)' }}>
            <span style={{ fontSize: '1rem' }}>
                {loading ? 'Visitor: ...' : error ? 'Visitor: -' : `Visitor: ${count}`}
            </span>
        </div>
    );
};

export default VisitorCounter;
