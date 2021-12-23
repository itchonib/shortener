import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home'
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
    <NavigationBar/>
    <Routes>
      <Route exact path="/" element={<Home />}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
