import "./Profile.css";
import cipher from "../../images/cipher.png";
import { useEffect, useState } from "react";
import { useData } from "../../Contexts/datacontext";
import { ProfileModal } from "../ProfileModal/ProfileModal";
import axios from "axios";



const Profile = () => {
  const {appearProfileModal , setAppearProfileModal , image , setImage} = useData();
  const [username,setUserName] = useState("")

  const email = localStorage.getItem("Email")
  const getData = ()=>{
    axios.get(`https://cipher-backend-production.up.railway.app/signup/user-details/?email=${email}`)
    .then((res)=>{
      setUserName(res.data[0].fname+" "+res.data[0].lname)       
    })
    .catch((err)=>console.log(err))
  }
    const loadfile = (event) => {
        const bol = event.target.files[0];
bol && setImage(URL.createObjectURL(event.target.files[0]))
    }

    useEffect(()=>{
      getData()
    },[])
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
       <p>{username}</p>
       <p>{email}</p>
            </div>
          </div>
        

        <div class="f-count">
          <h2>0 followers</h2>
        </div>
      </div>
    
  );
};

export { Profile };
