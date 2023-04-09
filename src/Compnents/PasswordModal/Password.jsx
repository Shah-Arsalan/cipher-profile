import { useData } from "../../Contexts/datacontext";
import "./Password.css"

const PasswordModal = () => {
  const {appearPasswordModal , setAppearPasswordModal} = useData();
  return (
    <div className="active-outer">
    <div className="p-modal">
      <div className="input">
        <label htmlFor="c-password">Current Password</label>
        <input id="c-password" className="input-txt pm-input" type="text" />
      </div>
      <div className="input">
        <label htmlFor="n-password">New Password</label>
        <input id="n-password" className="input-txt pm-input" type="text" />
      </div>
      <div className="input">
        <label htmlFor="co-password">Confirm Password</label>
        <input id="co-password" className="input-txt pm-input" type="text" />
      </div>
      <div className="buttons">
<button className="btn-cancel"  onClick={() => setAppearPasswordModal(prev => !prev)}>Cancel</button>
<button className="btn" onClick={() => setAppearPasswordModal(prev => !prev)}>Save</button>
      </div>
    </div>
    </div>
  );
};

export { PasswordModal };
