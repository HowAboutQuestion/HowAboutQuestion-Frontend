import { Routes, Route } from 'react-router';
import Landing from '@/pages/landing/Landing';
import Footer from '@/shared/footer/Footer';

/**
 *
 */
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
