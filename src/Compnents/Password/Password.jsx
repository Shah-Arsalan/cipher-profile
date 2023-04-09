import { useData } from "../../Contexts/datacontext"
import { PasswordModal } from "../PasswordModal/Password";

const Password = () => {
  const {appearPasswordModal , setAppearPasswordModal} = useData();
    return(
      
<div className="about-me-section">
{appearPasswordModal && <PasswordModal/>}
        <div className="top">
          <p>Password</p>
          <button className="btn" onClick={()=>{ console.log("working"); setAppearPasswordModal(prev => !prev)}}>Edit</button>
        </div>
        
          <div className="socials">
          <div className="sub-sec">
            <div className="input">
              <label htmlFor="job">Password & Security</label>
              <input
                id="password"
                className="input-txt"
                type="password"
              />
            </div>
          </div>
          </div>
          </div>
    )
}


export {Password}