import { useNavigate, useLocation } from 'react-router';

export const useNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    navigate('/');
  };

  const goSupport = () => {
    navigate('/support');
  };

  const handleDownload = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return { goHome, goSupport, handleDownload };
};
