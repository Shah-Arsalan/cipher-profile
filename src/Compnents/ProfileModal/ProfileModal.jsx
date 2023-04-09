import "./ProfileModal.css";
import { useEffect, useState } from "react";
import { useData } from "../../Contexts/datacontext";
import cipher from "../../images/cipher.png";
import axios from "axios";
// import "./Password.css"

const ProfileModal = () => {
  const { appearProfileModal, setAppearProfileModal, image, setImage } =
    useData();
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [mobile, setMobile] = useState("");
const email = localStorage.getItem("Email")
const pic = "shorturl.at/nyBL8"
  const editProfile = () => {
    axios.put("http://localhost:8080/signup/user-details/edit", {
      fname,
      lname,
      mobile,
      email,
      pic
    })
    .then((res)=>{console.log(res)})
    .catch((err)=> console.log(err))
  };

  //get data
  const getData = ()=>{
    axios.get(`http://localhost:8080/signup/user-details/?email=${email}`)
    .then((res)=>{
      setFName(res.data[0].fname) 
      setLName(res.data[0].lname)      
      setMobile(res.data[0].mobile)
    })
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    getData()
  },[])

  const loadfile = (event) => {
    const bol = event.target.files[0];
    bol && setImage(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <div className="active-outer ">
      <div className="profile-editor">
        <div className="logo flex-col">
          <div className="img-container mb">
            <img src={image} className="modal-image" />
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => loadfile(event)}
            className="file-btn"
          />
        </div>
        <div className="p-modal b-none">
          <div className="input">
            <label htmlFor="f-name">First Name</label>
            <input
              id="f-name"
              className="input-txt pm-input"
              type="text"
              onChange={(e) => setFName(e.target.value)}
              value={fname}
            />
          </div>
          <div className="input">
            <label htmlFor="l-name">Last Name</label>
            <input
              id="l-name"
              className="input-txt pm-input"
              type="text"
              onChange={(e) => setLName(e.target.value)}
              value={lname} 
            />
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="input-txt pm-input"
              type="text"
              value={email} disabled
            />
          </div>
          <div className="input">
            <label htmlFor="number">Phone number</label>
            <input
              id="number"
              className="input-txt pm-input"
              type="text"
              onChange={(e) => setMobile(e.target.value)}
              value={mobile}
            />
          </div>
          <div className="buttons">
            <button
              className="btn-cancel"
              onClick={() => setAppearProfileModal((prev) => !prev)}
            >
              Cancel
            </button>
            <button
              className="btn"
              onClick={() => {
              setAppearProfileModal((prev) => !prev)
                editProfile()
                window.location.reload()
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProfileModal };
