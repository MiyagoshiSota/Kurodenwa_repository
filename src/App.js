import logo from "./Group 2.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          複数のrepositorieを表示するのうまくいかなかった.app
        </p>

        <a href="https://github.com/SystemEngineeringTeam/kurodenwa_flutter_app" >あぷり</a>
        <a href="https://github.com/SystemEngineeringTeam/kurodenwa_arduino">らずぱい</a>
        <a href="https://github.com/SystemEngineeringTeam/kurodenwa_raspberrypi">あるでぃーの</a>
      </header>
    </div>
  );
}

export default App;
