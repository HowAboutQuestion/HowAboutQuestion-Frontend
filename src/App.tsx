import { Routes, Route } from 'react-router';
import Landing from '@/pages/landing/Landing';
import CustomerService from '@/pages/customerservice/CustomerService';
import Help from '@/pages/help/Help';

/**
 * App 진입점(라우팅)
 */
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/support" element={<CustomerService />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
};

export default App;
