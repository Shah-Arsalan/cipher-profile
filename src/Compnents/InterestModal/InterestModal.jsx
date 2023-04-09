import { useEffect, useState } from "react";
import { useData } from "../../Contexts/datacontext";
import "./InterestModal.css";
import axios from "axios";
const InterestModal = () => {
  const [selected, setSelected] = useState([]);
  const { appear, setAppear } = useData();
  const email = localStorage.getItem("Email");
  const {interestData, setInterestData} = useData();

  const handleInterestClick = (interest) => {
 
    if (selected.includes(interest)) {
      setSelected((prevSelected) =>
        prevSelected.filter((item) => item !== interest)
      );
    } else {
      setSelected((prevSelected) => [...prevSelected, interest]);
    }
  };

  const handleInterest = () => {
    axios
      .post(`http://localhost:8080/interest/create`, {
        interests: selected,
        email: email,
      })
      .then((res) => {
        console.log(res)
        getInterest()
      })
      .catch((err) => console.log(err));
  };

  const getInterest = () => {
    axios
      .get(`http://localhost:8080/interest/?email=${email}`)
      .then((res) => setInterestData(res.data.interests))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getInterest();
  }, []);

  // console.log("selected", selected)

  const getInterestClassName = (interest) => {
    return selected.includes(interest)
      ? "interest-child-selected"
      : "interest-child";
  };

  return (
    <div className="active-outer">
      <div className="socials interests">
        <div className="sub-sec interest-input">
          <div className="input">
            <div
              className={getInterestClassName("App Development")}
              onClick={() => handleInterestClick("App Development")}
            >
              App Development
            </div>
          </div>
          <div className="input">
            <div
              className={getInterestClassName("Web Development")}
              onClick={() => handleInterestClick("Web Development")}
            >
              Web Development
            </div>
          </div>
        </div>
        <div className="sub-sec">
          <div className="input">
            <div
              className={getInterestClassName("Game Development")}
              onClick={() => handleInterestClick("Game Development")}
            >
              Game Development
            </div>
          </div>
          <div className="input">
            <div
              className={getInterestClassName("Twitter")}
              onClick={() => handleInterestClick("Twitter")}
            >
              Twitter
            </div>
          </div>
        </div>
        <div className="sub-sec">
          <div className="input">
            <div
              className={getInterestClassName("Instagram")}
              onClick={() => handleInterestClick("Instagram")}
            >
              Instagram
            </div>
          </div>
          <div className="input">
            <div
              className={getInterestClassName("Website")}
              onClick={() => handleInterestClick("Website")}
            >
              Website
            </div>
          </div>
        </div>
        <div className="buttons">
          <button
            className="btn-cancel"
            onClick={() => setAppear((prev) => !prev)}
          >
            Cancel
          </button>
          <button
            className="btn"
            onClick={() => {
              setAppear((prev) => !prev);
              handleInterest();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export { InterestModal };
