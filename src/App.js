import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import data from './data';
import Card from './Card';
function App() {
  const cards = data.map((card)=>{
    return <Card item={card} key={card.id}/>
  });
  return (
    <div className="App">
      <Header/>
      <div className="items">
        {cards}
      </div>
    </div>
  );
}

export default App;
