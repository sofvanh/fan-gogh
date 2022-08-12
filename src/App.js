import './App.css';
import fan from './assets/fan.png'
import skyline from './assets/skyline.png'
import fanc from './assets/fan copy.png'
import skylinec from './assets/skyline copy.png'

function App() {
  return (
    <div className="App">
      <h1>Fan Gogh - AI-generated impressionist art</h1>
      <div className="flex-container">
        <img src={fan} />
        <img src={skyline} />
        <img src={fanc} />
        <img src={skylinec} />
      </div>
    </div>
  );
}

export default App;
