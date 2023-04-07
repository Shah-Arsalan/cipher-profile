import './App.css';
import { Aboutme } from './Compnents/AboutMe/Aboutme';
import { OntheWeb } from './Compnents/Ontheweb/Ontheweb';
import { Profile } from './Compnents/Profile/Profile';

function App() {
  return (
    <div className="App">
     <Profile/>
     <Aboutme/>
     <OntheWeb/>
    </div>
  );
}

export default App;
