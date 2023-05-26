// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="background">
        <div id="landing-container" className="center-flex">
          <div className="landing-title">TikTok Wrapped!</div>
          <div className="center-flex" id="drop-zone">
            <p>Drag your data <i>here</i></p>
          </div>

        </div>
        <div id="loading-container" className="center-flex">
          Proceessing your data
          <div className="loading-blocks">
            <div></div>
            <div></div>
            <div></div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
