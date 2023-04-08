import "./Profile.css";
import cipher from "../../images/cipher.png";
import { useState } from "react";

let userData ={
  userName:"Arsalan",
  email:"xyz@gmail.com",
}

const Profile = () => {
    const [image , setImage] = useState(cipher)
    const loadfile = (event) => {
        const bol = event.target.files[0];
bol && setImage(URL.createObjectURL(event.target.files[0]))
    }
  return (
    
      <div class="profile-container">
          <div className="logo">
          <div className="img-container">
            <img src={image} className="img" />
            </div>
            <input type="file" accept="image/*" onChange={(event) => loadfile(event)} className="file-btn"/>
            <div className="p-info">
       <p>Hello,</p>
       <p>{userData.name}</p>
       <p>{userData.email}</p>
            </div>
          </div>
        

        <div class="f-count">
          <h2>0 followers</h2>
        </div>
      </div>
    
  );
};

export { Profile };
