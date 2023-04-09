import "./Pinfo.css"


const Pinfo = () => {
    return (

<div className="about-me-section">
        <div className="top">
          <p>Personal Information</p>
          <button className="btn">Edit</button>
        </div>
        
          <div className="socials">
          <div className="sub-sec">
          <div className="input">
              <label htmlFor="highest-education">Highest education</label>
              <select className="select">
                <option value={"xyz"}>{"Higher Education"}</option>
              </select>
            </div>
            <div className="input">
              <label htmlFor="job">What do you do currently</label>
              <input
                id="job"
                className="input-txt"
                type="text"
              />
            </div>
          </div>
          </div>
          </div>

    )
}

export {Pinfo}