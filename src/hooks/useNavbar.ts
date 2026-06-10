import { useNavigate, useLocation } from 'react-router';

/**
 *
 */
export const useNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /**
   *
   */
  const goHome = () => {
    navigate('/');
  };

  /**
   *
   */
  const goSupport = () => {
    navigate('/support');
  };

  /**
   *
   */
  const goHelp = () => {
    navigate('/help');
  };

  /**
   *
   */
  const handleDownload = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  /**
   *
   */
  const goIntro = () => {
    navigate('/');
  };

  return { goHome, goSupport, goHelp, goIntro, handleDownload };
};
