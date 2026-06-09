import { Routes, Route } from 'react-router';
import Landing from '@/pages/landing/Landing';
import CustomerService from '@/pages/customerservice/CustomerService';

/**
 *
 */
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/support" element={<CustomerService />} />
      </Routes>
    </>
  );
};

export default App;
