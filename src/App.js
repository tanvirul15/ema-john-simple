import "./App.css";
import Header from "./component/Header/Header";
import Shop from "./component/Shop/Shop";

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Shop />
      </div>
    </div>
  );
}

export default App;
