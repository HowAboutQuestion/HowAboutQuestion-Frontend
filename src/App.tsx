import { Routes, Route } from 'react-router';
import Welcome from '@/pages/welcome/Welcome';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
};

export default App;
