import axios from "axios";
import { useEffect, useState } from "react";
import "./Ontheweb.css"

const OntheWeb = () => {
  const [flag , setFlag]  = useState(true)
  const [facebook , setFacebook]  = useState("")
  const [instagram , setInstagram]  = useState("")
  const [github , setGithub]  = useState("")
  const [linkedin , setLinkedin]  = useState("")
  const [website , setWebsite]  = useState("")
  const [twitter , setTwitter]  = useState("")

  const email = localStorage.getItem("Email")
  const editData = ()=>{
    axios.post(`http://localhost:8080/social/edit`,{email,linkedin,facebook,twitter,github,website,instagram})
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>console.log(err))
  }

  const getData = ()=>{
    // editData()
    axios.get(`http://localhost:8080/social/?email=${email}`,{linkedin,facebook,twitter,github,website,instagram})
    .then((res)=>{
      console.log(res)
      setFacebook(res.data.facebook)
      setGithub(res.data.github)
      setLinkedin(res.data.linkedin)
      setTwitter(res.data.twitter)
      setWebsite(res.data.website)
      setInstagram(res.data.instagram)
    })
    .catch((err)=>console.log(err))
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
      <div className="about-me-section">
        <div className="top">
          <p>On the Web</p>
          <div>
          <button className="btn-cancel" onClick={()=> setFlag(prev => !prev)}>Edit</button>
          <button className="btn" onClick={()=>{editData(); setFlag(prev => !prev)}}>Save</button>
          </div>
        </div>
        <div className="socials">
          <div className="sub-sec">
          <div className="input">
              <label htmlFor="linkedin">Linkedin</label>
              <input
                id="linkedin"
                className="input-txt"
                type="text"
                onChange={(e)=>setLinkedin(e.target.value)}
                value={linkedin}
                disabled={flag}
              />
            </div>
            <div className="input">
              <label htmlFor="github">Github</label>
              <input
                id="github"
                className="input-txt"
                type="text"
                onChange={(e)=>setGithub(e.target.value)}
                value={github}
                disabled={flag}
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
                onChange={(e)=>setFacebook(e.target.value)}
                value={facebook}
                disabled={flag}
              />
            </div>
            <div className="input">
              <label htmlFor="twitter">Twitter</label>
              <input
                id="twitter"
                className="input-txt"
                type="text"
                onChange={(e)=>setTwitter(e.target.value)}
                value={twitter}
                disabled={flag}
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
                onChange={(e)=>setInstagram(e.target.value)}
                value={instagram}
                disabled={flag}
              />
            </div>
            <div className="input">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                className="input-txt"
                type="text"
                onChange={(e)=>setWebsite(e.target.value)}
                value={website}
                disabled={flag}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { OntheWeb };
