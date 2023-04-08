import "./Password.css"

const PasswordModal = () => {
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
<button >Cancel</button>
<button className="primary-button">Save</button>
      </div>
    </div>
    </div>
  );
};

export { PasswordModal };
