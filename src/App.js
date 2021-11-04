import './App.css';
import {BiMenu} from 'react-icons/bi'
import {GiShoppingCart} from 'react-icons/gi'


const App = () => {
  const SadDoge = ({sadDogeSay}) => {
    return (
      <div className="Body">
        <img className="dogeSad" src={'https://cdn130.picsart.com/320648120422211.png?type=webp&to=min&r=640'}/>
        <text>
          {sadDogeSay}
        </text>
      </div>
    )
  }
  return (
    <div className="Container">
      <header className="Header" >
        <BiMenu style={{paddingLeft: 10}} color="#fff"/>
        <text style={{color: '#fff'}}>
          mi.room
        </text>
        <GiShoppingCart style={{paddingRight: 10}} color="#fff"/>
      </header>
      <div className="topImage"/>
      <div className="midTitle">
        <text>
          Mi casa es tu casa
        </text>
      </div>
    </div>
  );
}

export default App;
