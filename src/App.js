import './App.css';


const App = () => {
  const SadDoge = ({sadDogeSay}) => {
    return (
      <div className="Body">
        <img className="dogeSad" src={'https://cdn130.picsart.com/320648120422211.png?type=webp&to=min&r=640'} />
        <text>
          {sadDogeSay}
        </text>
      </div>
    )
  }
  return (
    <div className="Container">
      <div className="Header" >
        <text>
          Hello World
        </text>
      </div>
      <SadDoge sadDogeSay="I am hungry"/>
      <SadDoge sadDogeSay="I want to go home"/>
      <SadDoge sadDogeSay="I miss Ami"/>
    </div>
  );
}

export default App;
