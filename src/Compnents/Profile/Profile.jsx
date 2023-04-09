import "./Profile.css";
import cipher from "../../images/cipher.png";
import { useState } from "react";
import { useData } from "../../Contexts/datacontext";
import { ProfileModal } from "../ProfileModal/ProfileModal";

let userData ={
  userName:"Arsalan",
  email:"xyz@gmail.com",
}

const Profile = () => {
  const {appearProfileModal , setAppearProfileModal , image , setImage} = useData();
    const loadfile = (event) => {
        const bol = event.target.files[0];
bol && setImage(URL.createObjectURL(event.target.files[0]))
    }
  return (
    
      <div class="profile-container">
      {appearProfileModal && <ProfileModal/> }
          <div className="logo">
          <div className="img-container">
            <img src={image} className="img" />
            <button onClick={()=>setAppearProfileModal(prev => !prev)} className="btn">Edit</button>
            </div>
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
