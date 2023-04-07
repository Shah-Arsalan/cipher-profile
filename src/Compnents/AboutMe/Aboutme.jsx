import "./Aboutme.css"
const Aboutme = () => {
  return (
    <>
      <div className="about-me-section">
        <div className="top">
          <p>About me</p>
          <button className="btn">Edit</button>
        </div>
        <div className="text-container">
<textarea rows="5" placeholder="Enter someting about yourself" className="t-area"/>
        </div>
      </div>
    </>
  );
};

export { Aboutme };
