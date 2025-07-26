import { Route, Routes } from 'react-router-dom';
import './App.css';
import '@/styles/common.scss';
import LoginTest from '@/pages/user/LoginTest'



const App = () => {
    return (
        <Routes>
            <Route path='/' element={<LoginTest />} />
            <Route path='/LoginTest' element={<LoginTest/>} />
        </Routes>   
    )
}

export default App;
