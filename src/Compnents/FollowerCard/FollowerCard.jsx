import "./FollowerCard.css"
import cipher from "../../images/cipher.png"
import me from "../../images/me2.jpeg"

const FollowerCard = () => {

  return (
    <>
      <div className="follower-container">
        <div className="card-skeleton">
          <div className="image-container position-relative">
            <img className="image" src={me} alt="product-icon" />
          </div>

          <div className="content">
            <h3 className="card-content">asdfasd</h3>
            <h5>₹asfda / month</h5>
            <p>asfasf</p>
            <p>Available from afsads</p>
          </div>

          <div className="footer-button">
            <button className="card-button" >
           Rent Now
            </button>
          </div>
        </div>
        </div>
    </>
  );
};

export { FollowerCard};