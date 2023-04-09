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
  const Email = localStorage.getItem("Email")
  console.log(Email, "email")
  return (
    <div className="App">
<Routes>
<Route path="/" element={ <LoginPage/>} />
<Route path="/home" element={<ProfilePage/> } />
<Route path="/signup" element={<Signup/>} />
<Route path="/login" element={<LoginPage/>} />
</Routes>
    
    </div>
  );
}

export default App;
