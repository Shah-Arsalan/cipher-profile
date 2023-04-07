import "./Ontheweb.css"

const OntheWeb = () => {
  return (
    <>
      <div className="about-me-section">
        <div className="top">
          <p>On the Web</p>
          <button className="btn">Edit</button>
        </div>
        <div className="socials">
          <div className="sub-sec">
          <div className="input">
              <label htmlFor="linkedin">Linkedin</label>
              <input
                id="linkedin"
                className="input-txt"
                type="text"
              />
            </div>
            <div className="input">
              <label htmlFor="github">Github</label>
              <input
                id="github"
                className="input-txt"
                type="text"
              />
            </div>
          </div>
          <div className="sub-sec">
          <div className="input">
              <label htmlFor="facebook">Facebook</label>
              <input
                id="facebook"
                className="input-txt"
                type="text"
              />
            </div>
            <div className="input">
              <label htmlFor="twitter">Twitter</label>
              <input
                id="twitter"
                className="input-txt"
                type="text"
              />
            </div>
          </div>
          <div className="sub-sec">
          <div className="input">
              <label htmlFor="instagram">Instagram</label>
              <input
                id="instagram"
                className="input-txt"
                type="text"
              />
            </div>
            <div className="input">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                className="input-txt"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { OntheWeb };
