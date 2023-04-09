import "./ProfileModal.css"
import { useState } from "react";
import { useData } from "../../Contexts/datacontext";
import cipher from "../../images/cipher.png"
// import "./Password.css"

const ProfileModal = () => {
  const {appearProfileModal , setAppearProfileModal , image , setImage} = useData();
  const loadfile = (event) => {
    const bol = event.target.files[0];
bol && setImage(URL.createObjectURL(event.target.files[0]))
}
  return (
    <div className="active-outer ">
    <div className="profile-editor">
    <div className="logo flex-col">
          <div className="img-container mb">
            <img src={image} className="modal-image" />
            </div>
            <input type="file" accept="image/*" onChange={(event) => loadfile(event)} className="file-btn"/>
          </div>
    <div className="p-modal b-none">
      <div className="input">
        <label htmlFor="f-name">First Name</label>
        <input id="f-name" className="input-txt pm-input" type="text" />
      </div>
      <div className="input">
        <label htmlFor="l-name">Last Name</label>
        <input id="l-name" className="input-txt pm-input" type="text" />
      </div>
      <div className="input">
        <label htmlFor="email">Email</label>
        <input id="email" className="input-txt pm-input" type="text" />
      </div>
      <div className="input">
        <label htmlFor="number">Phone number</label>
        <input id="number" className="input-txt pm-input" type="text" />
      </div>
      <div className="buttons">
<button className="btn-cancel"  onClick={() => setAppearProfileModal(prev => !prev)}>Cancel</button>
<button className="btn" onClick={() => setAppearProfileModal(prev => !prev)}>Save</button>
      </div>
    </div>
    </div>
    </div>
  );
};

export { ProfileModal};
