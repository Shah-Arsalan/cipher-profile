import "./Signup.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      {" "}
      <div className="signup-page">
        <div className="login-container">
          <div className="login-inputs login-inputs-signup">
            <h1>Sign Up</h1>
            <form
              className="form"
              onSubmit={async (e) => {
                e.preventDefault()
                const allData = {
                  email: email,
                  fname: fname,
                  lname: lname,
                  mobile: mobile,
                  password: password,
                };

              axios.post("https://cipher-backend-production.up.railway.app/signup" , allData)
              .then((res)=>console.log(res))
              .catch((err)=>console.log(err))

              }}
            >
              <div className="input">
                <label htmlFor="signup-email">Email</label>
                <input
                  required={true}
                  id="signup-email"
                  placeholder="user@gmail.com"
                  className="input-txt"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="signup-first">First name</label>
                <input
                  id="signup-first"
                  placeholder="Jon"
                  className="input-txt"
                  type="text"
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>

              <div className="input">
                <label htmlFor="signup-last">Last Name</label>
                <input
                  id="signup-last"
                  //   value={signUpDetails.lastname}
                  placeholder="Doe"
                  className="input-txt"
                  type="text"
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>

              <div className="input">
                <label htmlFor="conf-password">Mobile Number</label>
                <input
                  id="conf-password"
                  //   value={signUpDetails.confirmpassword}
                  placeholder="Enter mobile No."
                  className="input-txt"
                  type="text"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>

              <div className="input">
                <label htmlFor="signup-password">Password</label>
                <div className="input-icon">
                  <input
                    required={true}
                    id="signup-password"
                    placeholder="********"
                    className="input-txt"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <i
                    //    onClick={() => {
                    //   if(passwordType == "password"){
                    //     setPasswordType("text")
                    //   }else{
                    //     setPasswordType("password")
                    //   }
                    // }}
                    className="fas fa-eye"
                  ></i>
                </div>
              </div>

              <div className="input forgot-password">
                <div className="list-item">
                  <input id="item-1" type="checkbox" name="checkbox-input" />

                  <label htmlFor="item-1">
                    I accept all terms and conditions
                  </label>
                </div>
              </div>

              <div className="input btn-input">
                <button type="submit" className="btn">
                  Create Account
                </button>
              </div>

              <div className="input login-link flex-justify-center">
                <p className="loginLink" onClick={() => navigate("/login")}>
                  Already a user? Login
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { Signup };
