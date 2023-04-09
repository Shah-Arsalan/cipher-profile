import axios from "axios";
import { useState , useEffect} from "react";
import { useData } from "../../Contexts/datacontext";
import { InterestModal } from "../InterestModal/InterestModal";

const Interests = () => {
  const { appear, setAppear, interestData ,setInterestData} = useData();
  console.log(interestData, "datain")
  const email = localStorage.getItem("Email");
  const getInterest = () => {
    axios
      .get(`http://localhost:8080/interest/?email=${email}`)
      .then((res) => setInterestData(res.data.interests))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getInterest();
  }, []);
  return (
    <div className="about-me-section">
      {appear && <InterestModal />}
      <div className="top">
        <p>Interests</p>
        <button onClick={() => setAppear((prev) => !prev)} className="btn">
          Edit
        </button>
      </div>
      {interestData &&
        interestData.map((ele) => {
          return <div>{ele}</div>
        })}
    </div>
  );
};

export { Interests };
