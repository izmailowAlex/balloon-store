import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import data from "./data";
import './App.css';

function App() {
  const [productsLibrary, setProductsLibrary] = useState(data);

  return (
    <div className="balloon">
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
      <span className="balloon__circle balloon_red"></span>
      <span className="balloon__circle balloon_yellow"></span>
      <span className="balloon__circle balloon_blue"></span>
    </div>
  );
}

export default App;