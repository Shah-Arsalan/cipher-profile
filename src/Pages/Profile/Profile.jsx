import { Aboutme } from "../../Compnents/AboutMe/Aboutme"
import { Interests } from "../../Compnents/Interests/Interests"
import { OntheWeb } from "../../Compnents/Ontheweb/Ontheweb"
import { Password } from "../../Compnents/Password/Password"
import { Pinfo } from "../../Compnents/Professionalinfo/Pinfo"
import { Profile } from "../../Compnents/Profile/Profile"

const ProfilePage = () => {
    return (
        <div>
<Profile/>
<Aboutme/>
<OntheWeb/>
<Pinfo/>
<Password/>
<Interests/>
        </div>
    )
}


export {ProfilePage}


