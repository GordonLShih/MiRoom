import './App.css';
import { BiMenu } from 'react-icons/bi'
import { GiShoppingCart } from 'react-icons/gi'
import topImg from './images/topImg.png'
import jsonData from './data.json';


const App = () => {

  const ImagesBlock = () => {
    return (
      <div className="imageBlockContainer">
        <img className="imageBlockImg" src={jsonData.item1.img}/>
        <img className="imageBlockImg" src={jsonData.item2.img}/>
      </div>
    )
  }
  return (
    <div className="Container">
      <header className="Header" >
        <BiMenu className="biMenu" color="#fff" />
        <b style={{ color: '#fff' }}>
          mi.room
        </b>
        <GiShoppingCart className="giShoppingCart" color="#fff" />
      </header>
      <div className="mainBackground">
        <div className="mainBody">
          <img className="topImage" src={topImg} alt="topImage" />
          <div className="midTitle">
            <i>
              Mi casa es tu casa
            </i>
          </div>
          <div className="horizontalLine" />
          <div className="verticalLine" />
          <div className="contentBox" >
            <ImagesBlock imgSrc="https://cdn130.picsart.com/320648120422211.png?type=webp&to=min&r=640"/>
            <ImagesBlock imgSrc="https://cdn130.picsart.com/320648120422211.png?type=webp&to=min&r=640"/>
            <ImagesBlock imgSrc="https://cdn130.picsart.com/320648120422211.png?type=webp&to=min&r=640"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;