import "./Login.css";
import { useState } from "react";
// import { useAuth } from "../../Contexts/auth-context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useData } from "../../Contexts/DataContext";

const LoginPage = () => {
  const navigate = useNavigate();
//   const { loginCall, token, user } = useAuth();
//   const { dispatch } = useData();
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });

  const guestLoginHandler = () => {
    setLoginDetails({
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    });
    // loginCall("adarshbalika@gmail.com", "adarshbalika");
  };  

  const handleLogin = ()=>{
   
    axios.post("https://cipher-backend-production.up.railway.app/login",loginDetails)
    .then((res)=>{
      if(res.data.msg === 'Login Successfull')
      {
        localStorage.setItem("Email",res.data.email)
        navigate("/home")
      }
      console.log(res.data)})
    .catch((err)=>console.log(err))
  }



  return (
    <>
      <div className="login-page">
        <div className="login-container login-box">
          <div className="login-inputs">
            <h1>Login</h1>
            <div className="input">
              <label htmlFor="login-email">Email</label>
              <input
                id="login-email"
                value={loginDetails.email}
                className="input-txt"
                type="email"
                onChange={(e) =>
                  setLoginDetails({ ...loginDetails, email: e.target.value })
                }
              />
            </div>
            <div className="input">
              <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                value={loginDetails.password}
                className="input-txt"
                type="password"
                onChange={(e) =>
                  setLoginDetails({ ...loginDetails, password: e.target.value })
                }
              />
            </div>

            <div className="input htmlFot-password">
              <div className="list-item">
                <input id="item-1" type="checkbox" name="checkbox-input" />
                <label htmlFor="item-1">Remember me</label>
                <a href="">Forgot Password</a>
              </div>
            </div>

            <div className="input btn-input">
              <button
                className="btn"
                onClick={
                  handleLogin
                }
              >
                Log In
              </button>
            </div>

            {/* <div className="input btn-input">
              <button
                className="btn"
                onClick={() => guestLoginHandler()}
              >
                Log In as guest
              </button>
            </div> */}

            <div
              onClick={() => navigate("/signup")}
              className="input signup-input flex-justify-center"
            >
              Dont have existing accout : Sign Up?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { LoginPage };
