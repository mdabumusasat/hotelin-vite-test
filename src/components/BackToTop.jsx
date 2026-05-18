import { useEffect, useState } from 'react';

function BackToTop({ className = '' }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Only render button when visible
  return (
    isVisible && (
    <div className="back-to-top-wrapper">
      <button id="back_to_top" type="button" className={`back-to-top-btn ${className}`}
        onClick={scrollToTop}>
          <i className="fa-solid fa-angle-up"></i>
      </button>
  </div>
    )
  );
}

export default BackToTop;