import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Mani';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Navbar/Header';
import Footer from './components/Footer/Footer';
import Subscribe from './components/Subscribe/Subscribe';
import Features from './components/Features/Features';
import About from './components/About/About';
import Choose from './components/Choose/Choose';
function App() {
  return (
    <Router>
    <Switch>
      <Route path="/">
        <Header/>
        <Home/>
        <About/>
        <Choose/>
        <Features/>
        <Subscribe/>
        <Footer/>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
