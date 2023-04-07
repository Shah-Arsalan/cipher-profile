import "./Profile.css";
import cipher from "../../images/cipher.png";

const Profile = () => {
  return (
    
      <div class="profile-container">
          <div className="logo">
          <div className="img-container">
            <img src={cipher} className="img" />
            </div>
            <div className="p-info">
       <p>Hello,</p>
       <p>Shah Arsalan</p>
       <p>shaharslan@gmail.com</p>
            </div>
          </div>
        

        <div class="f-count">
          <h2>0 followers</h2>
        </div>
      </div>
    
  );
};

export { Profile };
