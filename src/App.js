import './App.css';
import { Routes, Route } from "react-router-dom";
import { ProfilePage } from './Pages/Profile/Profile';
import { Signup } from './Pages/Signup/Signup';
import { LoginPage } from './Pages/Login/Login';
import { PasswordModal } from './Compnents/PasswordModal/Password';
import { InterestModal } from './Compnents/InterestModal/InterestModal';

function App() {
  return (
    <div className="App">
<Routes>
<Route path="/" element={<ProfilePage/>} />
<Route path="/signup" element={<Signup/>} />
<Route path="/login" element={<LoginPage/>} />
<Route path="/password" element={<PasswordModal/>} />
<Route path="/interest" element={<InterestModal/>} />
</Routes>
    
    </div>
  );
}

export default App;
