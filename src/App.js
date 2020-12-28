import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Subscribe from './components/Subscribe/Subscribe';
import Features from './components/Features/Features';
import About from './components/About/About';
import Choose from './components/Choose/Choose';
import Footer from './components/shared/Navbar/Footer/Footer';
import Header from './components/shared/Navbar/Header';
import Messenger from './components/Messenger/Messenger';
function App() {
  return (
    <Router>
    <Header/>
    <Switch>
      <Route path="/">
        <Home/>
        <About/>
        <Messenger/>
        <Choose/>
        <Features/>
        <Subscribe/>
      </Route>
    </Switch>
    <Footer/>
  </Router>
  );
}

export default App;
