import { useState } from "react"
import { useData } from "../../Contexts/datacontext"
import { InterestModal } from "../InterestModal/InterestModal"

const Interests = () => {

  const {appear , setAppear } = useData();
    return (
<div className="about-me-section">
{appear && <InterestModal/> }
        <div className="top">
          <p>Interests</p>
          <button onClick={() => setAppear(prev => !prev)} className="btn">Edit</button>
        </div>
          </div>
    )
}

export {Interests}