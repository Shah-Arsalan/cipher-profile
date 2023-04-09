import './App.css';
import { Routes, Route } from "react-router-dom";
import { ProfilePage } from './Pages/Profile/Profile';
import { Signup } from './Pages/Signup/Signup';
import { LoginPage } from './Pages/Login/Login';
import { PasswordModal } from './Compnents/PasswordModal/Password';
import { InterestModal } from './Compnents/InterestModal/InterestModal';
import { ProfileModal } from './Compnents/ProfileModal/ProfileModal';
import { Followers } from './Pages/Followers/Followers';

function App() {
  return (
    <div className="App">
<Routes>
<Route path="/" element={<ProfilePage/>} />
<Route path="/signup" element={<Signup/>} />
<Route path="/login" element={<LoginPage/>} />
<Route path="/password" element={<PasswordModal/>} />
<Route path="/interest" element={<InterestModal/>} />
<Route path="/profile" element={<ProfileModal/>} />
<Route path="/followers" element={<Followers/>} />
</Routes>
    
    </div>
  );
}

export default App;
