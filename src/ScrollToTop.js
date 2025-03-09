import { useEffect } from 'react'; // Only import what you need
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location]); // Trigger this effect whenever the location changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;