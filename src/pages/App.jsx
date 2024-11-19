import logo from '../logo.svg';
import '../stylesheets/App.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      {
        // <FoodList />
      }
    </div>
  );
}

export default App;
