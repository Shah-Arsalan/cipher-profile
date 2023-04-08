import "./InterestModal.css"

const InterestModal = () => {
    return(
        <div className="active-outer">
        <div className="socials interests">
          <div className="sub-sec interest-input">
          <div className="input">
              <div  className="interest-child">App Development</div>
            </div>
            <div className="input">
              <div className="interest-child">Web Development</div>
            </div>
          </div>
          <div className="sub-sec">
          <div className="input">
              <div className="interest-child">Game Development</div>
    
            </div>
            <div className="input">
              <div className="interest-child">Twitter</div>

            </div>
          </div>
          <div className="sub-sec">
          <div className="input">
              <div className="interest-child">Instagram</div>
        
            </div>
            <div className="input">
              <div className="interest-child">Website</div>

            </div>
          </div>
          <div className="buttons">
<button >Cancel</button>
<button className="primary-button">Save</button>
      </div>
        </div>
     
        </div>
    )
}


export {InterestModal}