import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Check if there is a hash and if the element exists
            const id = hash.replace('#', '');
            const element = document.getElementById(id);

            if (element) {
                // Scroll to the element
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100); // Small delay to ensure content is rendered
            }
        } else {
            // If no hash, scroll to top (optional, but good for SPA)
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]); // Re-run when path or hash changes

    return null;
};

export default ScrollToAnchor;
