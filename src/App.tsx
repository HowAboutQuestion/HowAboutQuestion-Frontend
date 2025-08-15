import { Routes, Route } from 'react-router';
import LoginTest from '@/pages/user/LoginTest';
import Welcome from '@/pages/welcome/Welcome';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/LoginTest" element={<LoginTest />} />
    </Routes>
  );
};

export default App;
