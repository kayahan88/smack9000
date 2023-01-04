import './App.scss';
import YouTubeEmbed from './Components/YouTubeEmbed';
import smack9000 from './smack9000.png';
import DSCN0756 from './images/DSCN0756.jpg'
import DSCN0757 from './images/DSCN0757.jpg'
import DSCN0758 from './images/DSCN0758.jpg'
import DSCN0759 from './images/DSCN0759.jpg'
import DSCN0760 from './images/DSCN0760.jpg'
import DSCN0761 from './images/DSCN0761.jpg'
import DSCN0762 from './images/DSCN0762.jpg'
import DSCN0763 from './images/DSCN0763.jpg'
import DSCN0764 from './images/DSCN0764.jpg'
import DSCN0765 from './images/DSCN0765.jpg'
import DSCN0767 from './images/DSCN0767.jpg'
import DSCN0768 from './images/DSCN0768.jpg'
import DSCN0769 from './images/DSCN0769.jpg';
import DSCN0770 from './images/DSCN0770.jpg'
import DSCN0771 from './images/DSCN0771.jpg'
import DSCN0772 from './images/DSCN0772.jpg'
import DSCN0773 from './images/DSCN0773.jpg'
import DSCN0775 from './images/DSCN0775.jpg'
import DSCN0778 from './images/DSCN0778.jpg'

function App() {
  return (
    <div className="App">
      <img id="logo" alt="smack9000" src={smack9000} />
      <YouTubeEmbed embedId="OiZYo9Jneuo" />
      {/* <div className="video"></div> */}
      <div class="board">
        <div class="square"><img alt="" src={DSCN0756} /></div>
        <div class="square"><img alt="" src={DSCN0757} /></div>
        <div class="square"><img alt="" src={DSCN0758} /></div>
        <div class="square"><img alt="" src={DSCN0759} /></div>
        <div class="square"><img alt="" src={DSCN0760} /></div>
        <div class="square"><img alt="" src={DSCN0761} /></div>
        <div class="square"><img alt="" src={DSCN0762} /></div>
        <div class="square"><img alt="" src={DSCN0763} /></div>
        <div class="square"><img alt="" src={DSCN0764} /></div>
        <div class="square"><img alt="" src={DSCN0765} /></div>
        <div class="square"><img alt="" src={DSCN0767} /></div>
        <div class="square"><img alt="" src={DSCN0768} /></div>
        <div class="square"><img alt="" src={DSCN0769} /></div>
        <div class="square"><img alt="" src={DSCN0770} /></div>
        <div class="square"><img alt="" src={DSCN0771} /></div>
        <div class="square"><img alt="" src={DSCN0772} /></div>
        <div class="square"><img alt="" src={DSCN0773} /></div>
        <div class="square"><img alt="" src={DSCN0775} /></div>
        <div class="square"><img alt="" src={DSCN0778} /></div>
        <div class="square"><img alt="" src={DSCN0772} /></div>
      </div>
      
    </div>
  );
}

export default App;
